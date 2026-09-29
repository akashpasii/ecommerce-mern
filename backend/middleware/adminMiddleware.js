const admin = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};

module.exports = admin;
