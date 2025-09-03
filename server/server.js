import "dotenv/config";
import cors from "cors";
import express from "express";
import { clerkwebhooks } from "./controller/usercontroller.js";
import connectDB from "./configs/mongodb.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB().catch(console.error);

// Middlewares
app.use(cors());

// Special handling for webhook route - parse raw body for signature verification
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }));

// Regular JSON parsing for other routes
app.use(express.json());

// Webhook route with special body handling
app.post("/api/user/webhooks", (req, res) => {
  try {
    // Parse the raw body for webhooks
    if (Buffer.isBuffer(req.body)) {
      req.body = JSON.parse(req.body.toString());
    }
    clerkwebhooks(req, res);
  } catch (error) {
    console.error("❌ Body parsing error:", error.message);
    res.status(400).json({ success: false, message: "Invalid JSON body" });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.send("API is working correctly");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;