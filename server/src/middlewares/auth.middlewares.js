import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

async function userAuthMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login!",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found! please login again.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function adminAuthMiddleware(req, res, next) {
  try {
    //the code here.
    const role = req.user?.role;
    if (role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied! Admin privileges required.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { userAuthMiddleware, adminAuthMiddleware };
