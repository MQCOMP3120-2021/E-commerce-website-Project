const mongoose = require('mongoose')
const url = process.env.MONGO_URL

const connect = async () => {
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
                  .catch((err) => {
                      console.log("database connection error!")
                  })
}

connect()

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    reviews: Array,
    photo: String
  })
  
  productSchema.set('toJSON', {
      transform: (document, returnedObj) => {
          returnedObj.id = returnedObj._id.toString()
          delete returnedObj._id
          delete returnedObject._v
      }
  })

  const Product = mongoose.model('Product', productSchema)

  module.exports = Product