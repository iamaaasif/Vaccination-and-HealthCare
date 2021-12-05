// external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/user");

async function userRegistration(req, res, next) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(req.files[0]);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
    avatar: req.files[0].filename,
  });
  try {
    const result = await newUser.save();

    res.status(200).json({
      message: "User was added succesfully.",
    });
  } catch (err) {
    unlink(
      path.join(
        __dirname,
        ` /../public/uploads/avatar/${req.files[0].filename}`
      ),
      (err) => {
        if (err) console.log(err);
      }
    );

    console.log(err);

    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

module.exports = {
  userRegistration,
};
