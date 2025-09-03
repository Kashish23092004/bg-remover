import express from 'express';
import { clerkwebhooks } from '../controller/usercontroller.js';
import UserModel from '../models/userModel.js';

const userRouter = express.Router();

// Webhook route - handled specially in server.js for body parsing
userRouter.post('/webhooks', clerkwebhooks);

// Additional user routes for API functionality
userRouter.get('/profile/:clerkId', async (req, res) => {
  try {
    const { clerkId } = req.params;
    const user = await UserModel.findByClerkId(clerkId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.json({ 
      success: true, 
      user: {
        id: user._id,
        clerkId: user.clerkId,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        fullName: user.getFullName(),
        photo: user.photo,
        creditBalance: user.creditBalance,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error('❌ Get profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Get user's credit balance
userRouter.get('/credits/:clerkId', async (req, res) => {
  try {
    const { clerkId } = req.params;
    const user = await UserModel.findByClerkId(clerkId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.json({ 
      success: true, 
      creditBalance: user.creditBalance 
    });
  } catch (error) {
    console.error('❌ Get credits error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Update user's credit balance
userRouter.patch('/credits/:clerkId', async (req, res) => {
  try {
    const { clerkId } = req.params;
    const { creditBalance } = req.body;
    
    if (typeof creditBalance !== 'number' || creditBalance < 0) {
      return res.status(400).json({
        success: false,
        message: 'Credit balance must be a non-negative number'
      });
    }
    
    const user = await UserModel.findOneAndUpdate(
      { clerkId },
      { creditBalance },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    console.log(`✅ Updated credits for user ${clerkId}: ${creditBalance}`);
    res.json({ 
      success: true, 
      creditBalance: user.creditBalance,
      message: 'Credits updated successfully'
    });
  } catch (error) {
    console.error('❌ Update credits error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// List all users (for admin/debug purposes)
userRouter.get('/all', async (req, res) => {
  try {
    const users = await UserModel.find({}, {
      __v: 0 // Exclude version field
    }).sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      count: users.length,
      users 
    });
  } catch (error) {
    console.error('❌ Get all users error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

export default userRouter;