import { Webhook } from "svix";
import UserModel from "../models/userModel.js";

const clerkwebhooks = async (req, res) => {
  try {
    console.log('Webhook received - Headers:', req.headers);
    
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    
    // Get the raw body as string
    const payload = req.body.toString();
    console.log('Webhook payload:', payload);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(payload, headers);

    const { data, type } = JSON.parse(payload);
    console.log('Webhook type:', type, 'Data:', data);

    switch (type) {
      case "user.created": {
        const userdata = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          photo: data.profile_image_url,
        };
        console.log('Creating user:', userdata);
        await UserModel.create(userdata);
        res.json({ success: true, message: 'User created' });
        break;
      }
      case "user.updated": {
        const userdata = {
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          photo: data.profile_image_url,
        };
        console.log('Updating user:', data.id, userdata);
        await UserModel.findOneAndUpdate({ clerkId: data.id }, userdata);
        res.json({ success: true, message: 'User updated' });
        break;
      }
      case "user.deleted": {
        console.log('Deleting user:', data.id);
        await UserModel.findOneAndDelete({ clerkId: data.id });
        res.json({ success: true, message: 'User deleted' });
        break;
      }
      default:
        console.log('Unknown webhook type:', type);
        res.json({ success: true, message: 'Webhook received' });
        break;
    }
  } catch (error) {
    console.log('Webhook error:', error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkwebhooks };