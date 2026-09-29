const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const createPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: createPassword,
      role,
    });
    // if (user) {
    //   // const otp = Math.floor(100000 + Math.random() * 900000).toString();
    //   // const message = `
    //   //       Welcome to shopNest, ${name}! Thank you fir registring with us. We are excited Your OTP for ShopNest registration is: ${otp}
    //   //       `;
    //   // await sendEmail(
    //   //   email,
    //   //   "Welcome to ShopNest - Your OTP for Registration",
    //   //   message,
    //   // );
    // }
    return res.status(201).json({
      message:
        "User registered successfully. Please check your email for the OTP.",
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    // res.status(201).json({ token: generateToken(user._id) });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invaild Credentials" });
  }
  const isPasswordVaild = await bcrypt.compare(password, user.password);
  if (!isPasswordVaild) {
    return res.status(400).json("Incorrect Password");
  }

  res.status(200).json({ token: generateToken(user) });
};

const getData = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { registerUser, loginUser, getData };
