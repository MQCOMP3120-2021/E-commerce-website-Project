require("dotenv").config()
const mongoose = require("mongoose")
const Cart = require("./models/cart.js")
const fs = require("fs")

const rawData = fs.readFileSync("server/sample.json")
const data = JSON.parse(rawData)

data.cart.map(items => {

    console.log(items)

    const newCartItem = new Cart({
        name: items.name,
        price: items.price,
        photo: items.photo,
        quantity: items.quantity
    })

    newCartItem.save().then(res => {
        console.log("new cart item saved")
    })
})