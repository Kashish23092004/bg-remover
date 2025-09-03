import UserModel from "../models/userModel.js";

const clerkwebhooks = async (req, res) => {
  try {
    console.log("👉 Webhook received - Headers:", req.headers);
    console.log("👉 Content-Type:", req.headers['content-type']);
    console.log("👉 Raw body:", req.body);
    console.log("👉 Body type:", typeof req.body);

    // ⚠️ Skip Clerk verification during testing
    console.log("⚠️ Skipping webhook signature verification (testing mode)");

    // Ensure req.body is parsed correctly
    const { data, type } = req.body || {};
    
    if (!data || !type) {
      console.error("❌ Invalid payload structure:", req.body);
      return res.status(400).json({ 
        success: false, 
        message: "Invalid payload - missing data or type",
        received: req.body 
      });
    }

    console.log("📋 Event type:", type);
    console.log("📋 Event data:", data);

    switch (type) {
      case "user.created": {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ clerkId: data.id });
        if (existingUser) {
          console.log("ℹ️ User already exists:", data.id);
          return res.json({ success: true, message: "User already exists" });
        }

        // Validate required fields
        if (!data.email_addresses || !data.email_addresses[0]) {
          console.error("❌ Missing email in user data:", data);
          return res.status(400).json({ success: false, message: "Missing email address" });
        }

        const userdata = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstname: data.first_name || "Unknown",
          lastname: data.last_name || "User",
          photo: data.profile_image_url || "https://via.placeholder.com/150",
        };
        
        console.log("✅ Creating user:", userdata);
        const newUser = await UserModel.create(userdata);
        console.log("✅ User created successfully:", newUser._id);
        
        res.json({ success: true, message: "User created", userId: newUser._id });
        break;
      }
      
      case "user.updated": {
        if (!data.email_addresses || !data.email_addresses[0]) {
          console.error("❌ Missing email in user update data:", data);
          return res.status(400).json({ success: false, message: "Missing email address" });
        }

        const userdata = {
          email: data.email_addresses[0].email_address,
          firstname: data.first_name || "Unknown",
          lastname: data.last_name || "User",
          photo: data.profile_image_url || "https://via.placeholder.com/150",
        };
        
        console.log("✏️ Updating user:", data.id, userdata);
        const updatedUser = await UserModel.findOneAndUpdate(
          { clerkId: data.id }, 
          userdata,
          { new: true, runValidators: true }
        );
        
        if (!updatedUser) {
          console.log("⚠️ User not found for update:", data.id);
          return res.status(404).json({ success: false, message: "User not found" });
        }
        
        console.log("✅ User updated successfully:", updatedUser._id);
        res.json({ success: true, message: "User updated", userId: updatedUser._id });
        break;
      }
      
      case "user.deleted": {
        console.log("🗑️ Deleting user:", data.id);
        const deletedUser = await UserModel.findOneAndDelete({ clerkId: data.id });
        
        if (!deletedUser) {
          console.log("⚠️ User not found for deletion:", data.id);
          return res.status(404).json({ success: false, message: "User not found" });
        }
        
        console.log("✅ User deleted successfully:", deletedUser._id);
        res.json({ success: true, message: "User deleted", userId: deletedUser._id });
        break;
      }
      
      default:
        console.log("ℹ️ Unknown webhook type:", type);
        res.json({ success: true, message: "Webhook received but not processed", type });
        break;
    }
  } catch (error) {
    console.error("❌ Webhook error:", error);
    console.error("❌ Error stack:", error.stack);
    res.status(500).json({ 
      success: false, 
      message: error.message,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

export { clerkwebhooks };