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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})