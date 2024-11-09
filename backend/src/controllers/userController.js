import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      phone,
      password,
      gender,
      city,
      district,
      pincode,
      state,
      address,
      licenseNo,
      licenseExpiryDate,
    } = req.body;

    const avatar = req.file ? req.file.path : null;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      phone,
      password,
      gender,
      city,
      district,
      pincode,
      state,
      address,
      licenseNo,
      licenseExpiryDate,
      avatar,
    });

    await newUser.save();

    // Generate a token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json("Email or Password required!");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(password);

    console.log(isValidPassword);

    if (!isValidPassword) {
      return res.status(402).json("Invalid Email or Password");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login Successful",
      token,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { registerUser, loginUser };
