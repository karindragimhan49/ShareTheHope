const jwt = require("jsonwebtoken"); // Import the JWT library for token generation
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing and comparison
const User = require("../models/User"); // Import the User model for interacting with the user database

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body; // Extract user details from request body

  try {
    console.log("Register request received:", { name, email }); // Log the incoming register request

    // Check if user already exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" }); // Return error if user already exists
    }

    // Create a new user if not exists
    const user = await User.create({ name, email, password });

    if (user) {
      // Return success response with user details and token if user creation is successful
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" }), // Generate JWT token
      });
    } else {
      res.status(400).json({ message: "Invalid user data" }); // Return error if user creation fails
    }
  } catch (error) {
    console.error("Error in registerUser function:", error); // Log error if any exception occurs
    res.status(500).json({ message: "Server error" }); // Return server error response
  }
};

// Authenticate User (Login)
const authUser = async (req, res) => {
  const { email, password } = req.body; // Extract user credentials from request body

  try {
    console.log("Received login request:", { email, password }); // Log the incoming login request

    // Step 1: Find user by email in the database
    const user = await User.findOne({ email });
    console.log("User found in database:", user); // Log user found in the database

    if (!user) return res.status(404).json({ message: "User not found" }); // Return error if user is not found

    // Step 2: Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password validation result:", isPasswordValid); // Log the result of password validation

    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" }); // Return error if password is invalid

    // Step 3: Generate JWT token after successful login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" }); // Create JWT token valid for 1 hour
    console.log("JWT generated successfully:", token); // Log the generated token

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token, // Send back the user data and token in the response
    });
  } catch (error) {
    console.error("Error in authUser function:", error); // Log error if any exception occurs
    res.status(500).json({ message: "Server error" }); // Return server error response
  }
};

// Logout User
const logoutUser = (req, res) => {
  res.status(200).json({ message: "User logged out successfully" }); // Send logout success message
};

module.exports = { registerUser, authUser, logoutUser }; // Export the functions to be used in other files
