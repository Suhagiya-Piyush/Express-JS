const Product = require('../model/product.model');

exports.addNewProduct = async (req, res) => {
    try {
        const {title, description, category, price, discountPercentage, rating, stock, tags, brand, sku} = req.body;
        let product = await Product.findOne({sku : sku, isDelete : false});
        if(product) return res.status(400).json({message:'Product already Exist...'})
        product = await Product.create({title, description, category, price, discountPercentage, rating, stock, tags, brand, sku});
        product.save();
        res.status(200).json({product, message:'Product Added Success...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}