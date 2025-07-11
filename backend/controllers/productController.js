const Product = require("../models/product");

exports.getAllProductsPublic = async (req, res) => {
  try {
    const category = req.query.category;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};
exports.getProductByIdPublic = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } 
    res.status(200).json(product);
  } catch (err) {
    console.error("❌ Failed to fetch product:", err);
    res.status(500).json({ message: "Failed to fetch product", error: err.message });
  }
}


exports.searchProductsPublic = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(products);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ message: 'Failed to search products' });
  }
};
