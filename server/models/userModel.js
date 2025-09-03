import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { 
    type: String, 
    required: true, 
    unique: true,
    index: true // Add index for better performance
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true, // Normalize email to lowercase
    trim: true // Remove whitespace
  },
  firstname: { 
    type: String, 
    required: true,
    trim: true
  },
  lastname: { 
    type: String, 
    required: true,
    trim: true
  },
  photo: { 
    type: String, 
    required: true,
    default: "https://via.placeholder.com/150"
  },
  creditBalance: { 
    type: Number, 
    default: 10,
    min: 0 // Credits cannot be negative
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
  collection: 'users' // Explicitly set collection name
});

// Add indexes for better query performance
userSchema.index({ clerkId: 1 });
userSchema.index({ email: 1 });

// Add a method to get user's full name
userSchema.methods.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
};

// Add a static method to find by clerk ID
userSchema.statics.findByClerkId = function(clerkId) {
  return this.findOne({ clerkId });
};

// Pre-save middleware to validate data
userSchema.pre('save', function(next) {
  // Ensure email is lowercase
  if (this.email) {
    this.email = this.email.toLowerCase();
  }
  next();
});

// Handle duplicate key errors more gracefully
userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    next(new Error(`${field} already exists`));
  } else {
    next(error);
  }
});

// ✅ This will go inside the "users" collection of your MongoDB database
const UserModel = mongoose.model("User", userSchema);

export default UserModel;