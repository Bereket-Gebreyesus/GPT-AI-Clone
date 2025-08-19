const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token.substring(0, 20) + "...");
      console.log("JWT Secret:", process.env.JWT_ACCESS_SECRET);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET || 'fallback-secret-key');
      console.log("Token decoded successfully:", decoded);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ error: "User not found" });
      }

      console.log("User found:", req.user.email);
      next();
    } catch (error) {
      console.log("JWT Verification Error:", error.message);
      return res.status(401).json({ error: "Not authorized, token failed" });
    }
  } else {
    console.log("No authorization header found");
    return res.status(401).json({ error: "Not authorized, no token" });
  }
};

module.exports = { protect };
