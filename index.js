const express = require('express')

const app = express()

function middlewareone(req, res, next){
    console.log("Middleware 1")
    next()
}

const middlewaretwo = (req, res, next)=>{
    console.log("middleware 2")
    next()
}

app.use(middlewareone)  // this middleware is applicable to all the routes

app.get('/',(req, res)=>{
    res.send("This is home page")
})

app.get('/about',(req, res)=>{
    res.send("This is about us page")
})

app.get('/contact',(req, res)=>{
    res.send("This is contact us page")
})

app.get('/signup',middlewaretwo,(req, res)=>{  // here middlewaretwo is applicable to only signup and login routes.
    res.send("Signed up successfully")
})

app.get('/login',middlewaretwo,(req, res)=>{
    res.send("Logged in successfully")
})

app.listen(2309,()=>{
    console.log("Our server is running")
})