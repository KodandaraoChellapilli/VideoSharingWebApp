// 1️⃣ Import mongoose
// Mongoose is a library that helps us connect our Node.js app to MongoDB database
// It also allows us to define "schemas" and "models" which structure our data
import mongoose from "mongoose";

// 2️⃣ Define a schema for the "User"
// A schema is like a blueprint for our database
// It defines what a user object should look like and what rules it must follow
const userSchema = new mongoose.Schema(
  {
    // 3️⃣ Name field
    // Optional string. User can have a name, but it's not required
    name: { type: String },

    // 4️⃣ Email field
    // Required string, must be unique
    // "required: true" → user must provide email, cannot be empty
    // "unique: true" → no two users can have the same email
    email: { type: String, required: true, unique: true },

    // 5️⃣ Password field
    // Required string. User must provide password
    password: { type: String, required: true },

    // 6️⃣ Token field
    // Optional string, usually used for authentication or session validation
    // Example: when user logs in, we can create a token to keep them logged in
    token: { type: String },

    // 7️⃣ Upload count
    // Number to track how many uploads a user has made
    // Default value is 0 → if user doesn't have any uploads yet
    uploadCount: { type: Number, default: 0 },

    // 8️⃣ Download count
    // Number to track how many downloads a user has made
    // Default value is 0
    downloadCount: { type: Number, default: 0 },
  },

  // 9️⃣ Schema options
  {
    // "timestamps: true" → Mongoose automatically adds two fields for each document:
    // 1. createdAt → when the user was first added to database
    // 2. updatedAt → when the user data was last updated
    // This is very useful for tracking user activity and debugging
    timestamps: true,
  }
);
