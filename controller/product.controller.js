const Product = require("../model/product.model");
const ProductServices = require('../service/product.service');
const ProductService = new ProductServices();

exports.addNewProduct = async (req, res) => {
  try {
    let product = await ProductService.getProduct({ sku: req.body.sku, isDelete: false });
    if (product)
      return res.status(400).json({ message: "Product already Exist..." });
    product = await ProductService.addNewProduct({...req.body});
    product.save();
    res.status(201).json({ product, message: "Product Added Success..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
