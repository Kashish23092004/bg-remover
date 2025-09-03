import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectDB from './configs/mongodb.js'
import userRouter from './Routes/userroutes.js'

const app = express()
const PORT = process.env.PORT || 4000

// Connect to MongoDB
connectDB().catch(console.error);

// Middleware
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/', (req, res) => {
    res.send('API is working correctly')
});

app.use('/api/user', userRouter);

// Export for Vercel serverless
export default app;

// Local development listener
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
}