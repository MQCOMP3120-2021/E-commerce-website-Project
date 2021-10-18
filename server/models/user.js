const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MOGODB_URL
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

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String, 
    passwordHash: String,
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._v
        delete returnedObject._id
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User