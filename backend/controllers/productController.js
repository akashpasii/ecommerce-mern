const Product = require("../model/Product");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
    });
    res.status(201).json({ product });
  } catch (e) {
    res.status(400).json({ messge: e.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.stock = stock || product.stock;

      const updatepassword = await product.save();
      res.json(updatepassword);
    } else {
      res.status(404).json("Product not Found");
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(400).json("User not Found");
    }
    res.status(200).json("delete");
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
