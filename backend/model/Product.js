const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },

  price: { type: Number, default: 0 },
  category: { type: String, default: "General" },
  stock: { type: Number, default: 0 },
  images: { type: String, default: "" },

  createdAt: { type: Date, default: Date.now },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);
