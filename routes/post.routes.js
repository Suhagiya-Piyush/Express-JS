const express = require('express');
const postRoute = express.Router();
const userRoute = express.Router();

const {
    addNewPost,
    getAllPost,
    getPost,
    replacePost,
    updatePost,
    deletePost,
    addNewUser,
    getAllUser,
    getUser,
    replaceUser,
    updateUser,
    deleteUser
} = require('../controller/post.controller');

/* -------------------------- Add New Post & Users - Create ------------------------- */
postRoute.post('/', addNewPost);
userRoute.post('/', addNewUser);

/* -------------------------- Get All Posts & User - Read -------------------------- */
postRoute.get('/', getAllPost);
userRoute.get('/', getAllUser);

/* --------------------------- Get Single Post & User - Read --------------------------- */
postRoute.get('/:id', getPost);
userRoute.get('/:id', getUser);

/* --------------------------- Replace Data - PUT --------------------------- */
postRoute.put('/:id', replacePost);
userRoute.put('/:id', replaceUser);

/* --------------------------- Update Data - PATCH -------------------------- */
postRoute.patch('/:id', updatePost);
userRoute.patch('/:id', updateUser);

/* -------------------------- Delete Data - DELETE -------------------------- */
postRoute.delete('/:id', deletePost);
userRoute.delete('/:id', deleteUser);

module.exports = postRoute;
module.exports = userRoute;