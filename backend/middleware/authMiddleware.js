const jwt = require("jsonwebtoken"); // Import the JWT library for verifying tokens

// Middleware to protect routes
const protect = (req, res, next) => {
  // Extract token from the Authorization header (formatted as "Bearer <token>")
  const token = req.headers.authorization?.split(" ")[1];

  // If no token is provided, return a 401 Unauthorized response
  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token (user information) to the request object
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return a 401 Unauthorized response
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = { protect }; // Export the protect middleware
