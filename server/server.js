const express = require('express') 
const fs = require("fs") 
const cors = require("cors")

const rawData = fs.readFileSync("server/sample.json")
const data = JSON.parse(rawData)

const app = express() 

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
    console.log("GET")
    res.json(data.products)
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})