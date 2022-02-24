const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userData = decoded;

    if (decoded.username === "admin") {
      req.userData.isAdmin = true;
    }
    next();
  } catch (err) {
    res.status(500).json({
      message: "Authentication Failed",
    });
  }
};
