const posts = require('../Data/post.json');
const users = require('../Data/user.json');

// CRUD
/* -------------------------- Add New Post & Users - Create ------------------------- */
exports.addNewPost = ((req, res) => {
    posts.push(req.body);
    res.json({post : req.body, message : 'Post Added Success'});
})
exports.addNewUser = ((req, res) => {
    users.push(req.body);
    res.json({user : req.body, message : 'User Added Success'});
})
/* -------------------------- Get All Posts & User - Read -------------------------- */
exports.getAllPost = ((req, res) => {
    res.json(posts);
})
exports.getAllUser = ((req, res) => {
    res.json(users);
})
/* --------------------------- Get Single Post & User - Read --------------------------- */
exports.getPost = ((req, res) => {
    let id = +req.params.id;
    let item = posts.find((post)=>post.id === id);
    res.json(item);
})
exports.getUser = ((req, res) => {
    let id = +req.params.id;
    let singleUser = users.find((users)=>users.id === id);
    res.json(singleUser);
})
/* --------------------------- Replace Data - PUT --------------------------- */
exports.replacePost = ((req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((post)=>post.id === id);
    posts.splice(postIndex, 1, {...req.body});
    res.json({message : 'Post Replaced Success'});
})
exports.replaceUser = ((req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user)=>user.id === id);
    users.splice(userIndex, 1, {...req.body});
    res.json({message : 'User Replaced Success'});
})
/* --------------------------- Update Data - PATCH -------------------------- */
exports.updatePost = ((req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((posts)=>posts.id === id);
    const post = posts[postIndex];
    posts.splice(postIndex, 1, {...post,...req.body});
    res.json({message : 'Post Update Success'});
})
exports.updateUser = ((req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((users)=>users.id === id);
    const user = users[userIndex]
    users.splice(userIndex, 1, {...user,...req.body});
    res.json({message : 'User Update Success'});
})
/* -------------------------- Delete Data - DELETE -------------------------- */
exports.deletePost = ((req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((post)=>post.id === id);
    posts.splice(postIndex, 1,);
    res.json({message : 'Post Deleted Success'});
})
exports.deleteUser = ((req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user)=>user.id === id);
    users.splice(userIndex, 1,);
    res.json({message : 'Post Deleted Success'});
})