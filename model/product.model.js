const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    discountPercentage : {
        type : Number
    },
    rating : {
        type : Number
    },
    stock : {
        type : Number,
        required : true
    },
    tags : [{
        type : String,
        required : true
    }],
    brand : {
        type : String,
        required : true
    },
    sku : {
        type : String,
        required : true
    },
    isDelete:{
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('products', productSchema)