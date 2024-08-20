const express = require('express');

const { addNewProduct } = require("../controller/product.controller");

const productRoutes = express.Router();

productRoutes.post('/', addNewProduct);

module.exports = productRoutes;
