const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type : String,
    },
    description : {
        type : String
    },
    category : {
        type : String
    },
    price : {
        type : Number
    },
    discountPercentage : {
        type : Number
    },
    rating : {
        type : Number
    },
    stock : {
        type : Number
    },
    tags : [{
        type : String
    }],
    brand : {
        type : String
    },
    sku : {
        type : String
    },
    isDelete:{
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('product', productSchema)