const mongoose = require("mongoose"); // Import mongoose to interact with the MongoDB database
const bcrypt = require("bcrypt"); // Import bcrypt to hash passwords

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's name (required field)
  email: { type: String, required: true, unique: true }, // User's email (required and must be unique)
  password: { type: String, required: true }, // User's password (required field)
});

// Pre-save middleware to hash the password before saving it to the database
UserSchema.pre("save", async function (next) {
  // Check if the password field is being modified
  if (!this.isModified("password")) return next(); // If not, skip the hashing step

  // Generate a salt (random data to make hashing more secure)
  const salt = await bcrypt.genSalt(10);

  // Hash the password with the generated salt
  this.password = await bcrypt.hash(this.password, salt);

  next(); // Continue with the save operation
});

// Export the User model so it can be used in other parts of the application
module.exports = mongoose.model("User", UserSchema);
