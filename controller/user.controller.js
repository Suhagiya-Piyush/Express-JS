const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'../userLog.txt')

const {getFormattedTimestamp} = require('../service/timeStamp');

// Registration
exports.registerUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (user) return res.status(400).json({ message: "User already Exist..." });
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    user = await User.create({ ...req.body, password: hashPassword });
    user.save();
    res.status(201).json({ user, message: "User Registration Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (!user) return res.status(404).json({ message: "User Not Found..." });
    let matchPassword = await bcrypt.compare(req.body.password, user.password);
    if (!matchPassword ){
      return res
        .status(400)
        .json({ message: "Email or Password not Match..." });}
    const token = await jwt.sign({userId : user._id}, process.env.JWT_SECRET)
    const userLog = `{\n userId : "${user._id}", \n userName : "${user.firstName} ${user.lastName}" , \n userEmail : "${user.email}" , \n tokenId : "${token}" ,\n createAt : "${getFormattedTimestamp()} " , \n}, \n`
    fs.appendFileSync(filePath,userLog,'utf-8');
    res.status(200).json({ message: "User Login Success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.userProfile = async (req, res) => {
  try {
    const {user} = req;
    res.status(200).json(user);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
}