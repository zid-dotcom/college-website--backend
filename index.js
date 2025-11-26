require('dotenv').config()

const express= require('express')

const server=express()
require('./connect/db')

const cors=require('cors')
const router=require('./routes/router')
server.use(cors())
server.use(express.json())
server.use(router)


const PORT=3000||process.env.PORT

server.listen(PORT,()=>{
    console.log(`server is runnning at :${PORT}`);
    

}) 