/*// todo -------------------------------- Lesson 5 (09/08/24)-------------------------------- */

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
/* --------------------------- Get Single Post & User --------------------------- */
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

/* ------------------------------ Server Start ------------------------------ */
app.listen(1234, () => {
    console.log('Server start at http://localhost:1234');
});
