import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Configure mongoose options (updated for newer versions)
    const options = {
      serverSelectionTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      maxPoolSize: 10, // Connection pool size
    };

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
      console.log("📊 Database:", mongoose.connection.name);
      console.log("🔗 Host:", mongoose.connection.host);
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected");
    });

    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    console.log("🚀 Attempting MongoDB connection...");
    console.log("🔗 URI:", process.env.MONGODB_URI.replace(/\/\/.*@/, "//***:***@")); // Hide credentials in logs
    
    await mongoose.connect(process.env.MONGODB_URI, options);
    
    console.log("🎉 MongoDB connection established successfully");
    
  } catch (error) {
    console.error("💥 MongoDB connection failed:");
    console.error("❌ Error message:", error.message);
    console.error("❌ Error code:", error.code);
    
    if (error.code === 8000) {
      console.error("🔐 Authentication failed - check your username/password");
    } else if (error.code === 'ENOTFOUND') {
      console.error("🌐 Network error - check your connection string");
    }
    
    process.exit(1);
  }
};

// Handle process termination gracefully
process.on('SIGINT', async () => {
  console.log('\n⏹️ Received SIGINT. Closing MongoDB connection...');
  await mongoose.connection.close();
  process.exit(0);
});

export default connectDB;