const jwt = require("jsonwebtoken")
const User = require("../models/user")

const requestLogger = (request, response, next) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(request.method, request.path)
        console.log(request.body)
    }
    next()
}


const errorMiddleware = (error, request, response, next) => {
    console.log("ERROR: ", error.name)
    console.log(error.stack)
    response.status(500).send({error: error.name})
    next()
}

const JwtCookieAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, "secret", async (err, userToken) => {
            if(err) {
                console.log(err.message)
                res.clearCookie("jwt")
                return res.json(null)
            }
            else{
                console.log(userToken)
                let user = await User.findById(userToken.id)
                res.json(user)
                next()
            }
        })
    }
    else{
        console.log("no/invalid cookie")
        return res.json(null)
    }
}

module.exports = {requestLogger, errorMiddleware, JwtCookieAuth}