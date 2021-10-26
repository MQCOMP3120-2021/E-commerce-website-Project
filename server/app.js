require('dotenv').config()

const express = require('express') 
const cookieParser = require('cookie-parser')
const cors = require("cors")
const apiRouter = require("./controllers/api")
const middleware = require("./utils/middleware")
var session = require('express-session')

const app = express() 

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(cookieParser())
app.use(express.static('build'))
app.use(apiRouter)
app.use(middleware.errorMiddleware)

module.exports = app