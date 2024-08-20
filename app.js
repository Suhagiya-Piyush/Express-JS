/*// todo -------------------------------- Lesson 8 (12/08/24)-------------------------------- */

require('dotenv').config();
/* ----------------------------- Import Express ----------------------------- */
const express = require('express');
/* ------------------------------ Create server / App ----------------------------- */
const app = express();
/* ------------------------------ Import Morgam ----------------------------- */
const morgan = require('morgan');
/* ----------------------------- Import Mongoose ---------------------------- */
const mongoose = require('mongoose');
const port = process.env.PORT

// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connection established successfully...'))
    .catch(err=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.send('Welcome to Express Srver');
})

const userRoutes = require("./routes/post.routes");
const productRoutes = require("./routes/product.routes");

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

/* ------------------------------ Server Start ------------------------------ */
app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
