const express = require('express');
const cartsRoutes = express.Router();

const { addtocart, getAllCarts, deleteCart, updateCart } = require('../controller/cart.controller');
const { verifyToken } = require('../helpers/tokenVerify');

cartsRoutes.post('/', verifyToken, addtocart);
cartsRoutes.get('/', verifyToken, getAllCarts);
cartsRoutes.put('/delete-cart', verifyToken, deleteCart);
cartsRoutes.put('/update-cart', verifyToken, updateCart);

module.exports = cartsRoutes;