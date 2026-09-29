const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.log(`MongoDB connection failed:`, e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
