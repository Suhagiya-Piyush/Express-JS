const express = require('express');
const {registerUser, loginUser, userProfile} = require('../controller/user.controller');
const userRoutes = express.Router(); 
const {verifyToken} = require('../helpers/tokenVerify');

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile", verifyToken, userProfile);

module.exports = userRoutes;