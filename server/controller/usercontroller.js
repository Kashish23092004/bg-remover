import { Webhook } from "svix";
import UserModel from "../models/userModel.js";

const clerkwebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;
    switch (type) {
      case "user.created": {
        const userdata = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          photo: data.profile_image_url,
        };
        await UserModel.create(userdata);
        res.json({});
        break;
      }
      case "user.updated": {
        const userdata = {
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          photo: data.profile_image_url,
        };
        await UserModel.findOneAndUpdate({ clerkId: data.id }, userdata);
        res.json({});
        break;
      }
      case "user.deleted": {
        await UserModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }
      default:
        res.json({});
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkwebhooks };
