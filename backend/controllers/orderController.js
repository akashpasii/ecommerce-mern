const Order = require("../model/Order");

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;
    if (!items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({ message });
    } else {
      const order = await Order.create({
        userId: req.user.id,
        items,
        totalAmount,
        address,
        paymentId,
      });
      await order.save();
      res.status(201).json({ message: "Order create successfully", order });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getMyOrder = async (req, res) => {
  try {
    const order = await Order.findOne(
      { user: req.user._id },
    //   Order.populate("items.productId", "name price"),
    );
    res.json(order);
  } catch (e) {
    res.status(500).json({ message: "Error fetching orders", e });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find({}).populate("userId", " id name");
    res.json(order);
  } catch (e) {
    res.status(500).json({ message: "Error fetching orders", e });
  }
};

module.exports = { createOrder, getMyOrder, getAllOrders };
