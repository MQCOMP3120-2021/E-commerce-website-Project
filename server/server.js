const express = require('express') 
const fs = require("fs") 
const cors = require("cors")
const bcrypt = require ("bcrypt")
const jwt = require("jsonwebtoken")

const rawData = fs.readFileSync("server/sample.json")
const data = JSON.parse(rawData)
const getUser = (username) => {
  return data.users.filter(u=>u.username ==username)[0]
}
const app = express() 

app.use(cors())
app.use(express.json())
app.use(express.static("build"))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
  next();
});

app.get('/api/products', (req, res) => {
    console.log("GET")
    res.json(data.products)
})

app.get('/api/products/:id', (request, response) => {
  const id = Number(request.params.id)
  const product = data.products.filter(p => p.id === id)[0]
  // return a 404 if there is no such product
  if (product) {
   response.json(product)
  } else {
   response.status(404).end()
  }
})

app.get('/api/cart', (req,res) => {
  console.log("GET")
  res.json(data.cart)
})

app.post('/api/cart', (req,res) => {
  const body = req.body

  const NewCartItem = {
    id: generateId(),
    productid: body.id,
    name: body.name,
    description: body.description,
    price: body.price,
    photo: body.photo,
    quantity: 1
  }

  data.cart = data.cart.concat(NewCartItem)
  console.log(NewCartItem)
  res.json(data.cart)
})

app.delete('/api/cart/:id', (req,res) => {
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
    res.send("Cart has not been updated")
  }
  res.status(204).end()
})

const generateId = () => {
  const MAXID = data.cart.length > 0 ? Math.max(...data.cart.map((u) => u.id)) : 0
  return MAXID + 1
}

app.post('/api/login', async (req, res) => {

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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})