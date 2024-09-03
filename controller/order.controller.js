const Cart = require('../model/cart.model');
const Order = require('../model/order.model');

exports.addNewOrder = async (req, res) => {
    try {
        // console.log('id-==-=-=',req.user._id);
        
        let carts = await Cart.find({
            user : req.user._id,
            isDelete : false,
        }).populate('productId');
        // console.log('cart-=-=-=-=',carts);
        
        // let find = [{
        //     $match : {user : req.user._id, isDelete : false},
        // },{
        //     $lookup : {
        //         form : 'products',
        //         localField : 'productId',
        //         foreignField : '_id',
        //         as : 'productId'
        //     }
        // }
        // ];
        // let carts = await Cart.aggeregate(find);

        let orderItems = carts.map((item) => ({
            productId : item.productId._id,
            quantity : item.quantity,
            price : item.productId.price,
            totalAmount : item.quantity * item.productId.price,
        }));
    
        let amount = orderItems.reduce((total, item) => (total += item.totalAmount), 0);
    
        let order = await Order.create({
            userId : req.user._id,
            items : orderItems,
            totalPrice : amount
        });
        await Cart.updateMany({
            user : req.user._id,
            isDelete : false
        },{
            isDelete : true
        });
        res.json({message : 'Order Placed', order});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Server Error'});
    }
};