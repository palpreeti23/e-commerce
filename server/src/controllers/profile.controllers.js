import User from "../models/user.models.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

async function getUserProfile(req, res) {
  try {
    const user = req.user;
    return res.status(200).json({
      success: true,
      message: "Fetched user profle successfully!",
      user,
    });
  } catch (error) {
    console.error("Error getting user profile", error);
    return res
      .status(500)
      .json({ success: false, message: "Error getting user profile!" });
  }
}

async function updateUserProfile(req, res) {
  try {
    const id = req.user._id;
    const { username, fullName, phone } = req.body;

    let updatedForm = {};

    if (username !== undefined) {
      updatedForm.username = username.trim();
    }

    if (fullName !== undefined) {
      updatedForm.fullName = fullName.trim();
    }

    if (phone !== undefined) {
      updatedForm.phone = phone.trim();
    }

    if (req.file) {
      const updategImage = await uploadToCloudinary(req.file.buffer);
      updatedForm.avatar = updategImage.secure_url;
    }

    if (Object.keys(updatedForm).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Plesae provide profile details to update!",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updatedForm },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");
    return res.status(200).json({
      success: true,
      message: "updated user profle successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user profile", error);
    return res
      .status(500)
      .json({ success: false, message: "Error updating user profile!" });
  }
}

export { getUserProfile, updateUserProfile };
