const mongoose = require('mongoose')

const url = process.env.MOGODB_URL

const connect = async () => {
    await mongoose.connect(url)
                  .then(res => {
                      console.log("connected to order database")
                  })
                  .catch((err) => {
                      console.log("database connection error! ", err)
                  })
}

connect()

const orderSchema = new mongoose.Schema({
    user: String,
    cart: Array,
    total: Number
  })
  
  orderSchema.set('toJSON', {
      transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id.toString()
          delete returnedObject._id
          delete returnedObject._v
      }
  })

  const Order = mongoose.model('Order', orderSchema)

  module.exports = Order