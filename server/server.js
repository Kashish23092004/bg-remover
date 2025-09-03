import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import userRouter from './Routes/userRoutes.js';
import connectDB from './configs/mongodb.js';

const app = express()
const PORT = process.env.PORT || 4000

console.log('Testing imports...');
try {
    const test = await import('./Routes/userRoutes.js');
    console.log('userRoutes import successful');
} catch (error) {
    console.log('userRoutes import failed:', error.message);
}
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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log(`Also accessible via http://localhost:${PORT}`);
});