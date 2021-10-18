const express = require('express') 
const fs = require("fs") 
const bcrypt = require ("bcrypt")
const jwt = require("jsonwebtoken")
const Product = require("../models/products")
const { response } = require('express')
const apiRouter = express.Router()
var cors = require('cors')
const nodemailer = require("nodemailer");
var app = express()

const SECRET = process.env.SECRET

app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors());

const rawData = fs.readFileSync("server/sample.json")
const data = JSON.parse(rawData)

const getProduct = (name) => {
    return data.products.filter(p => p.name === name)[0]
}

const getUser = (username) => {
    return data.users.filter(u => u.username === username)[0]
}

const getTokenFrom = request => {
    const authorization = request.get('authorization') 
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) { 
           return authorization.substring(7)  
        }  
    return null
}

apiRouter.get('/api/products', (req, res) => {
    console.log("GETTING PRODUCTS")
    Product.find({})
           .then(products => {
             res.json(products)
           })
})

apiRouter.get('/api/products/:id', (req, res) => {
    Product.findById(req.params.id)
         .then(p => {
             if(p){
                res.json(p)
             }
             else{
                 response.status(404).json("product doesn't exist")
             }    
         })
         .catch(() => {
             res.status(404).json({error: "cannot find product!"})
         })
})

apiRouter.post('/api/products', (req, res) => {
    const body = request.body

    if(!body.content){
        return response.status(400).json({error:"missing content(s)"})
    }

    const product = new Product({
        name: body.name,
        desctiption: body.description,
        price: "$" + body.price,
        reviews: [],
        photo: body.photo
    })

    product.save()
           .then(p => {
               response.json(p)
               console.log("successfully saved!")
           })
})

apiRouter.get('/api/cart', (req,res) => {
  console.log("GET")
  res.json(data.cart)
})

apiRouter.post('/api/cart', (req,res) => {
  const body = req.body

  const NewCartItem = {
    id: generateId(),
    productid: body.id,
    name: body.name,
    description: body.description,
    price: body.price,
    photo: body.photo,
    quantity: body.quantity
  }

  data.cart = data.cart.concat(NewCartItem)
  console.log(NewCartItem)
  res.json(data.cart)
})

apiRouter.post('/api/cart/:id', (req,res) => {
  const id = Number(req.params.id)
  const len = data.cart.length
  console.log('Cart ID is ', id)
  const body = req.body

  for (let i=0; i<len; i++){
    if(data.cart.id === id){
      data.cart.quantity = body.quantity
    }
  }
})

apiRouter.delete('/api/cart/:id', (req,res) => {
  const id = Number(req.params.id)
  const len = data.cart.length

  data.cart = data.cart.filter((c) => c.id !== id)
  if (data.cart.length < len){
    res.send("Item has been removed")
    for (let i = 0; i<len; i++){
      data.cart[i].id = i
    }
  }
  else{
    res.send("Item has not been removed from cart")
  }
  res.status(204).end()
})

const generateId = () => {
  const MAXID = data.cart.length > 0 ? Math.max(...data.cart.map((u) => u.id)) : 0
  return MAXID + 1
}

apiRouter.post('/api/login', async (req, res) => {

  const {username, password} = req.body

  const user = getUser(username)
  console.log(user)

  if (!user) {
      return res.status(401).json({error: "invalid username or password"})
  }

  if (await bcrypt.compare(password, user.password)) {
      console.log("Password is good!")

      const userForToken = {
          id: user.id,
          username: user.username            
      }
      const token = jwt.sign(userForToken, "secret")

      return res.status(200).json({token, username: user.username, name: user.name})

  } else {
      return res.status(401).json({error: "invalid username or password"})
  }

})


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "groupj.bakery@gmail.com",
    pass: "GroupJ_Bakery",
  },
})

apiRouter.post('/api/FAQ', (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const enquiry = req.body.enquiry;

  const mail = {
    from: name,
    to: "groupj.bakery@gmail.com",
    subject: "Enquiry Form Submission",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${enquiry}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if(error) {
      res.json({ status: "ERROR"});
    } else {
      res.json({ status: "Message Sent"});
    }
  })

})

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
})

module.exports = apiRouter
