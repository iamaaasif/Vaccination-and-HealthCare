const User = require("../models/user.js");

const getAllUsers = (req, res, next) => {
  User.find().then((response) => {
    res.status(200).json(response);
  });
};
const updateUser = async (req, res, next) => {
  try {
    console.log(req.params._id);
    const response = await User.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $set: req.body,
      }
    );
    res.json({
      response,
    });
  } catch (err) {
    console.log(err.msg);
    res.status(403).json({
      msg: "update failed!!",
    });
  }
};

module.exports = {
  getAllUsers,
  updateUser,
};
