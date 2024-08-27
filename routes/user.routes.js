const express = require("express");
const {
  registerUser,
  loginUser,
  userProfile,
  updateUser,
  deleteUser,
  updatePassword,
  viewUsers
} = require("../controller/user.controller");
const userRoutes = express.Router();
const { verifyToken } = require("../helpers/tokenVerify");
const { upload } = require("../helpers/imageUpload");

userRoutes.post("/register", upload.single("profileImage"), registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile", verifyToken, userProfile);
userRoutes.put("/update-user", verifyToken, updateUser);
userRoutes.put("/delete-user", verifyToken, deleteUser);
userRoutes.put("/update-password", verifyToken, updatePassword);
userRoutes.get("/viewUsers", viewUsers);

module.exports = userRoutes;
