const User = require("../models/user.js");

const getAllUsers = (req, res, next) => {
  User.find().then((response) => {
    res
      .status(200)
      .json(response)
      .catch((err) => err);
  });
};

module.exports = {
  getAllUsers,
};
