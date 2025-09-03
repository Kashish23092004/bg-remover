import "dotenv/config";
import cors from "cors";
import express from "express";
import { clerkwebhooks } from "./controller/usercontroller.js";
import connectDB from "./configs/mongodb.js";

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Connect to MongoDB
connectDB().catch(console.error);

// ✅ Webhook route (must use raw body)
app.post("/api/user/webhooks", express.raw({ type: "application/json" }), clerkwebhooks);

// Normal middlewares
app.use(express.json());
app.use(cors());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("API is working correctly");
});

// Local dev server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app; // For Vercel serverless
