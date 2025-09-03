import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectDB from './configs/mongodb.js'
import userRouter from './Routes/userroutes.js'

const PORT = process.env.PORT || 4000
const app = express()
await connectDB();

// Middleware - Webhook routes need raw body, others need JSON
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => {
    res.send('this api is working')
});

app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});