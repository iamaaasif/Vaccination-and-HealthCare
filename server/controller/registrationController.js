// external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/user");

async function userRegistration(req, res, next) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // console.log(req.files[0]);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
    // avatar: req.files[0].filename,
  });
  try {
    const result = await newUser.save();

    res.status(200).json({
      message: "User created succesfully.",
    });
  } catch (err) {
    // try {
    //   unlink(
    //     path.join(
    //       __dirname,
    //       ` /../public/uploads/avatar/${req.files[0].filename}`
    //     ),
    //     (err) => {
    //       if (err) {
    //         console.log(err);
    //         res.status(500).json({
    //           error: "Error, no file!",
    //         });
    //       }
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).json({
    //     errors: {
    //       msg: "Unable to create user!",
    //     },
    //   });
    // }

    console.log(err);

    res.status(500).json({
      errors: {
        msg: err.message,
      },
    });
  }
}

module.exports = {
  userRegistration,
};
