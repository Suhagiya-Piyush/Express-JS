require('dotenv').config();
/* ----------------------------- Import Express ----------------------------- */
const express = require('express');
/* ------------------------------ Create server / App ----------------------------- */
const app = express();
/* ------------------------------ Import Morgam ----------------------------- */
const morgan = require('morgan');
/* ----------------------------- Import Mongoose ---------------------------- */
const mongoose = require('mongoose');
const port = process.env.PORT;
const path = require('path');
const ejs = require('ejs');
const hbs = require('hbs');

// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connection established successfully...'))
    .catch(err=>console.log(err));

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use("/public/images", express.static(path.join(__dirname, 'public/images')));

app.get('/', (req,res) => {
    res.send('Welcome to Express Srver');
})

const userRoutes = require("./routes/user.routes");
const cartsRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');
const productRoutes = require("./routes/product.routes");

app.use("/api/user", userRoutes);
app.use("/api/cart", cartsRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product", productRoutes);

/* ------------------------------ Server Start ------------------------------ */
app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
