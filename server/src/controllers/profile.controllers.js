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

async function addAddress(req, res) {
  try {
    const { name, area, city, state, pin } = req.body;

    if (!name || !area || !city || !state || !pin) {
      return res.status(400).json({
        success: false,
        message: "All address fields are required!",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          addresses: { name, area, city, state, pin },
        },
      },
      { returnDocument: "after", runValidators: true },
    ).select("-password");

    return res.status(201).json({
      success: true,
      message: "Address added successfully!",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Error adding address:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add address!",
    });
  }
}

async function deleteAddress(req, res) {
  try {
    const { addressId } = req.params;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: {
          addresses: { _id: addressId },
        },
      },
      { returnDocument: "after" },
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Address deleted successfully!",
      addresses: user.addresses,
    });
  } catch (error) {
    console.error("Error deleting address:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete address!",
    });
  }
}
export { getUserProfile, updateUserProfile, addAddress, deleteAddress };
