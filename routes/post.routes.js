const express = require('express');
const { addNewUser } = require('../controller/post.controller');
const userRoutes = express.Router();

userRoutes.post('/', addNewUser);

module.exports = userRoutes;