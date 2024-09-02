const Cart = require('../model/cart.model');

exports.addtocart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({
            user : userId,
            productId : req.body.productId,
            isDelete : false
        });
        if(cart){
            cart.quantity += (req.body.quantity) || 1;
            await cart.save()
            // let  IncreaseQuantity = cart.quantity + 1
            // cart = await Cart.findByIdAndUpdate(cart._id,{$set :{ quantity :IncreaseQuantity }} , {new : true})
           return res.status(200).json({message : 'product Added To Cart susses',cart});
        }
        cart = await Cart.create({user : userId, ...req.body});
        res.status(201).json({message : 'Cart Added', cart});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error..." });
    }
};

exports.getAllCarts = async (req, res) => {
    try {
        let carts = await Cart.find({user : req.user._id, isDelete : false});
        if(!carts) res.status(404).json({message : 'Cart is Empty...'});
        res.json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error..." });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ _id : req.body._id , isDelete : false});
        cart = await Cart.findByIdAndUpdate(cart._id, {$set : {isDelete : true}}, {new : true});
        res.status(202).json({cart, message : 'Cart Delete success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error..." });
    }
};

exports.updateCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ _id : req.body._id , isDelete : false});
        cart = await Cart.findByIdAndUpdate(cart._id, {$set : req.body}, {new : true});
        res.status(202).json({cart, message : 'Cart Update success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error..." });
    }
}