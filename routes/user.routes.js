const express = require('express');
const {registerUser, loginUser, userProfile, updateUser, deleteUser, updatePassword} = require('../controller/user.controller');
const userRoutes = express.Router(); 
const {verifyToken} = require('../helpers/tokenVerify');

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile", verifyToken, userProfile);
userRoutes.put("/update-user", verifyToken, updateUser);
userRoutes.put("/delete-user", verifyToken, deleteUser);
userRoutes.put("/update-password", verifyToken, updatePassword);

module.exports = userRoutes;