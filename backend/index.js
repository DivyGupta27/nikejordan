const express= require("express");
const app =express()
const cors =require('cors')
const connectDB =require('./database');
require('dotenv').config()
const port=process.env.PORT
connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/add/shoes', require('./router/shoes.router.js'))
app.use('/api/auth', require('./router/auth.router.js'))
app.use('/user/cart', require('./router/usercart.router.js'))


app.listen(port,()=>{
    console.log(`the server is working on http://localhost:${port}`)
})