/*// todo -------------------------------- Lesson 7 (10/08/24)-------------------------------- */

/* ----------------------------- Import Express ----------------------------- */
const express = require('express');
/* ------------------------------ Create server / App ----------------------------- */
const app = express();
/* ------------------------------ Import Morgam ----------------------------- */
const morgan = require('morgan');

const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/post.routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send('Welcome to express Server');
})

app.use('/api/post', postRoute);
app.use('/api/user', userRoute);

/* ------------------------------ Server Start ------------------------------ */
app.listen(1234, () => {
    console.log('Server start at http://localhost:1234');
});
