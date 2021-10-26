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

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    reviews: Array,
    photo: String,
    category: String,
  })
  
  productSchema.set('toJSON', {
      transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id.toString()
          delete returnedObject._id
          delete returnedObject._v
      }
  })

  const Product = mongoose.model('Product', productSchema, 'Products')

  module.exports = Product