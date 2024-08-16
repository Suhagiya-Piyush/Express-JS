/*// todo -------------------------------- Lesson 8 (12/08/24)-------------------------------- */

/* ----------------------------- Import Express ----------------------------- */
const express = require('express');
/* ------------------------------ Create server / App ----------------------------- */
const app = express();
/* ------------------------------ Import Morgam ----------------------------- */
const morgan = require('morgan');
/* ----------------------------- Import Mongoose ---------------------------- */
const mongoose = require('mongoose');

// Database Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/users")
    .then(() => console.log('Database connection established successfully...'))
    .catch(err=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.send('Welcome to Express Srver');
})

const userRoutes = require("./routes/post.routes");

app.use("/api/user", userRoutes);

/* ------------------------------ Server Start ------------------------------ */
app.listen(1234, () => {
    console.log('Server start at http://localhost:1234');
});
