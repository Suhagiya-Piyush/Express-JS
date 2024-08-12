/*// todo -------------------------------- Lesson 6 (09/08/24)-------------------------------- */

/* ----------------------------- Import Express ----------------------------- */
const express = require('express');
/* ------------------------------ Create server / App ----------------------------- */
const app = express();
/* ------------------------- Import Post.JSON & User.JSON File ------------------------ */
const posts = require('./Data/post.json');
const users = require('./Data/user.json');
/* ------------------------------ Import Morgam ----------------------------- */
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send('Welcome to express Server');
})
// CRUD
/* -------------------------- Add New Post & Users - Create ------------------------- */
app.post('/post', (req, res) => {
    posts.push(req.body);
    res.json({post : req.body, message : 'Post Added Success'});
})
app.post('/user', (req, res) => {
    users.push(req.body);
    res.json({user : req.body, message : 'User Added Success'});
})
/* -------------------------- Get All Posts & User - Read -------------------------- */
app.get('/post', (req, res) => {
    res.json(posts);
})
app.get('/user', (req, res) => {
    res.json(users);
})
/* --------------------------- Get Single Post & User - Read --------------------------- */
app.get('/post/:id', (req, res) => {
    let id = +req.params.id;
    let item = posts.find((post)=>post.id === id);
    res.json(item);
})
app.get('/user/:id', (req, res) => {
    let id = +req.params.id;
    let singleUser = users.find((users)=>users.id === id);
    res.json(singleUser);
})
/* --------------------------- Replace Data - PUT --------------------------- */
app.put('/post/:id', (req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((post)=>post.id === id);
    posts.splice(postIndex, 1, {...req.body});
    res.json({message : 'Post Replaced Success'});
})
app.put('/user/:id', (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user)=>user.id === id);
    users.splice(userIndex, 1, {...req.body});
    res.json({message : 'User Replaced Success'});
})
/* --------------------------- Update Data - PATCH -------------------------- */
app.patch('/post/:id', (req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((posts)=>posts.id === id);
    const post = posts[postIndex];
    posts.splice(postIndex, 1, {...post,...req.body});
    res.json({message : 'Post Update Success'});
})
app.patch('/user/:id', (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((users)=>users.id === id);
    const user = users[userIndex]
    users.splice(userIndex, 1, {...user,...req.body});
    res.json({message : 'User Update Success'});
})
/* -------------------------- Delete Data - DELETE -------------------------- */
app.delete('/post/:id', (req, res) => {
    let id = +req.params.id;
    let postIndex = posts.findIndex((post)=>post.id === id);
    posts.splice(postIndex, 1,);
    res.json({message : 'Post Deleted Success'});
})
app.delete('/user/:id', (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((user)=>user.id === id);
    users.splice(userIndex, 1,);
    res.json({message : 'Post Deleted Success'});
})

/* ------------------------------ Server Start ------------------------------ */
app.listen(1234, () => {
    console.log('Server start at http://localhost:1234');
});
