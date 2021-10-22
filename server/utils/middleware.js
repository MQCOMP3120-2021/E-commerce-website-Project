const jwt = require("jsonwebtoken")

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
    const token = req.cookies.token

    try{
        const user = jwt.verify(token, "secret")
        req.user = user
        return res.redirect("/")
    }
    catch(error){
        res.clearCookie("token")
        return res.redirect("/Login")
    }
}

module.exports = {requestLogger, errorMiddleware, JwtCookieAuth}