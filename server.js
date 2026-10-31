const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const studentRouter = require('./routes/studentroutes')

connectDB()
//mounting or route mount
app.use(express.json())
app.use('/api/v1',studentRouter)

//http://localhost:3000/api/v1/createstudent

app.listen(PORT,()=>{
    console.log( `server is running on ${PORT}`)
})