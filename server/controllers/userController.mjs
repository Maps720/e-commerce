import asyncHandler from "express-async-handler";
import User from "../models/userModule.mjs";
import { generateToken } from "../config/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;

  if (!fname || !lname || !phone || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`Email already exists`);
  }

  const user = await User.create({
    fname,
    lname,
    phone,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      fname: user.fname,
      lname: user.lname,
      phone: user.phone,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPasswords(password))) {
    res.status(201).json({
      _id: user._id,
      fname: user.fname,
      lname: user.lname,
      phone: user.phone,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});
