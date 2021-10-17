const mongoose = require('mongoose')

const url = process.env.MOGODB_URL

const connect = async () => {
    await mongoose.connect(url)
                  .then(res => {
                      console.log("connected to database")
                  })
                  .catch((err) => {
                      console.log("database connection error! ", err)
                  })
}

connect()

const cartSchema = new mongoose.Schema({
    productid: String,
    name: String,
    description: String,
    price: String,
    reviews: Array,
    photo: String,
    quantity: Number
  })
  
  cartSchema.set('toJSON', {
      transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id.toString()
          delete returnedObject._id
          delete returnedObject._v
      }
  })

  const Cart = mongoose.model('Cart', cartSchema)

  module.exports = Cart