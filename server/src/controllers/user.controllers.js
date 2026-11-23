import User from "../models/user.models.js";

async function getAllUsers(req, res) {
  try {
    const users = await User.find().select("-password");
    if (users.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No user exist!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched all users!",
      users,
    });
  } catch (error) {
    console.error("Error getting all users", error);
    return res.status(500).json({
      success: false,
      message: "Error getting all users!",
    });
  }
}

export { getAllUsers };
