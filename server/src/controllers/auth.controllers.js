import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  try {
    //get username email password from req.body
    //find if already exists
    //hash password
    //create user
    //create jwt sign - token
    //send response

    const { username, email, password } = req.body;

    const userAlreadyExists = await User.findOne({ username });
    if (userAlreadyExists) {
      res.status(409).json({ message: "Username already exists!" });
      return;
    }

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      res.status(409).json({ message: "Email already exists!" });
      return;
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });
    return res.status(201).json({
      success: true,
      message: "User registration complete!",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: "user",
      },
    });
  } catch (error) {
    console.error("Error registering user", error);
    return res
      .status(500)
      .json({ success: false, message: "Error registering user!" });
  }
}

async function loginUser(req, res) {
  try {
    //get username email password from req.body
    // get user using either email or username
    //validate password
    //verify jwt
    //send response

    const { username, email, password } = req.body;
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(409).json({ message: "Invalid credentials!" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
    });
    return res.status(200).json({
      success: true,
      message: "User successfully logged in",

      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error login user", error);
    return res
      .status(500)
      .json({ success: false, message: "Error login user!" });
  }
}

async function logoutUser(req, res) {
  try {
    //clear token from cookie
    res.clearCookie("token", { httpOnly: true });
    const user = req.user;
    return res
      .status(200)
      .json({ success: true, message: "User successfully logged out!", user });
  } catch (error) {
    console.error("Error logging user out", error);
    return res
      .status(500)
      .json({ success: false, message: "Error logging user out!" });
  }
}

export { registerUser, loginUser, logoutUser };
