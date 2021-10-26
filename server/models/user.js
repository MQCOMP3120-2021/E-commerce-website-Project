const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MOGODB_URL
console.log(url)
const connect = async () => {
    await mongoose.connect(url)
                  .then(res => {
                      console.log("connected to user database")
                  })
                  .catch((err) => {
                      console.log("user database connection error! ", err)
                  })
}

connect()



const UserSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        unique: true
    },
    name: String, 
    password: String,
    cart: Array
},
  {collection: 'Users'})

UserSchema.plugin(uniqueValidator)

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User