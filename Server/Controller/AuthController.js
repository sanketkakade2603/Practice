import User from '../Model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY


export const Register = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const existingUser = await User.findOne({email});

        if (existingUser){
            return res.status(400).json({
                msg:"Email already exist. Please use a different email."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create ({ name, email, password: hashedPassword});

    res.status(201).json({
        msg: "Register Sucessfully.",
        user: newUser,
    });
        
    } catch (error) {
        
        console.log("Registration Error:", error);
        res.status(500).json({
            msg: "Server error during registration.",
     });
    };
    
};

export const Login = async (req, res) =>{
    const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials. Email not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials. Incorrect password." });
    }

   
    const payload = { userId: user._id };
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({
      msg: "Login successful.",
      token,
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ msg: "Server error during login." });
  }
};


export const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ msg: "Please provide email" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found. Please register." });
    }

    // Generate a secure random token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash the token before saving (for security)
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    // Set token & expiry in user record
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpiry = Date.now() + 10 * 60 * 1000; // valid for 15 mins
    await user.save();

    // Reset URL (frontend URL)
    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // Nodemailer config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Link",
      html: `
        <p>Hi ${user.name || "User"},</p>
        <p>You requested to reset your password. Click the link below to reset it:</p>
        <a href="${resetURL}" target="_blank">${resetURL}</a>
        <p>This link will expire in 10 minutes.</p>
      `,
    });

    res.status(200).json({ msg: "Password reset link sent to your email." });
  } catch (error) {
    console.error("Error in forgetPassword:", error);
    res.status(500).json({ msg: "Something went wrong." });
  }
};


export const ResetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ msg: "Please provide a new password." });
    }

    // Hash the token to match the stored one
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Find user with valid token & not expired
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired reset token." });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Clear reset fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;

    await user.save();

    res.status(200).json({ msg: "Password has been reset successfully." });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ msg: "Something went wrong." });
  }
};
