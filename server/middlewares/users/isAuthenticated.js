const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded);

    console.log("Here is error!");

    req.userData = decoded;
    console.log("Here is error!");

    if (decoded.username === "admin") {
      req.userData.isAdmin = true;
    }
    next();
  } catch (err) {
    console.log("error!");

    console.log(err);
    res.status(500).json({
      message: "Authentication Failed",
    });
  }
};
