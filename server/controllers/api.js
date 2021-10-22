const express = require('express') 
const fs = require("fs") 
const bcrypt = require ("bcrypt")
const jwt = require("jsonwebtoken")
const Product = require("../models/products")
const Cart = require("../models/cart")
const User = require("../models/user")
const { response } = require('express')
const apiRouter = express.Router()
var cors = require('cors')
const nodemailer = require("nodemailer");
const { JwtCookieAuth } = require('../utils/middleware')
var app = express()
const cookieParser = require('cookie-parser')

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

const getUser = ({username}) => {
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
    const body = req.body

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
  console.log("GETTING CART")
  Cart.find({})
      .then(items => {
        res.json(items)
  })
})

apiRouter.post('/api/cart', (req,res) => {
  const body = req.body

  if(!body.content){
    return response.status(400).json({error:"Item Not Added"})
  }

  const cart = new Cart({
    productid: body.productid,
    name: body.name,
    description: body.description,
    price: body.price,
    reviews: body.reviews,
    photo: body.photo,
    quantity: body.quantity
  })

  cart.save()
      .then(c => {
        response.json(c)
        console.log("Item Added", c.name)
      })
})

apiRouter.put('/api/cart/:id', (req, res, next) => {

  const newAmount = req.body
  Cart.findByIdAndUpdate(req.params.id, newAmount, { new: true })
      .then(updatedAmount => {
        res.json(updatedAmount)
      })
      .catch(error => next(error))
  
})

apiRouter.delete('/api/cart/:id', (req, res, next) => {
  Cart.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(204).end()
      })
      .catch(error => next(error))
  
})

// const generateId = () => {
//   const MAXID = data.cart.length > 0 ? Math.max(...data.cart.map((u) => u.id)) : 0
//   return MAXID + 1
// }

apiRouter.post('/api/login', async (req, res) => {

  const {username, password} = req.body
  const user = await User.findOne({username}).lean()
  console.log(user)

  if (!user) {
      return res.status(401).json({error: "User does not exist"})
  }

  if (await bcrypt.compare(password, user.password)) {
      console.log("Password is good!")

      const userForToken = {
          id: user._id,
          username: user.username,
          cart: user.cart,
          name: user.name            
      }
      const token = jwt.sign(userForToken, "secret")

      return res.cookie('jwt', token, {httpOnly: true, maxAge: 3000000000})
                .status(200)
                .json({token, username: user.username, name: user.name})

  } else {
      return res.status(401).json({error: "invalid username or password"})
  }

})

apiRouter.get('/api/getUser', JwtCookieAuth)

apiRouter.post('/api/sign-up', async (req, res) => {
  const body= req.body
  const limit = 10
  const passwordHash= await bcrypt.hash(body.password, limit)

  if (!body.username || typeof body.username !== 'string') {
		return res.status(401).json({error: 'Invalid username' })
	}

	if (!body.password || typeof body.password !== 'string') {
		return res.status(401).json({ error: 'Invalid password' })
	}

	if ((body.password).length < 3) {
		return res.status(401).json({error: 'Password too small. Should be at least 3 characters'	})
	}

  else{

  const user = new User({
      username:body.username,
      name: body.name,
      password: passwordHash,
  })
  const savedUser = await user.save()
  res.json(savedUser)
}})


apiRouter.get('/api/logout', function(req, res) {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, '', {expiresIn:1}, (logout, err) => {
    if(logout){
      res.cookie('jwt', '', {maxAge: 1})
      res.send({msg:'You have been Logged Out'})
      res.redirect('/')
    }
    else{
      res.send({msg:'Error'})
    }
  })
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
