import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectDB from './configs/mongodb.js'
import userRouter from './Routes/userroutes.js'

const PORT = process.env.PORT||4000
const app = express()
await connectDB();
//middleware
app.use(express.json());//any request can parse in json format
app.use(cors());//with cors we can connect user that is on different port to backend server
//api route
app.get('/',(req,res)=>
    res.send('this api is working')
)
app.use('/api/user',userRouter)
app.listen(PORT,()=>{
    console.log( `server is running on port ${PORT}`)
})