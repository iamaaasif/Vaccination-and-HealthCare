// external imports
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const { unlink } = require("fs");
// internal imports
const User = require("../../models/user");

// add user
const signUpValidators = [
  check("username")
    .isLength({ min: 1 })
    .withMessage("username is required")
    .trim(),
  check("email")
    .isLength({ min: 3 })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email already is use!");
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

const signUpValidatorHandler = (req, res, next) => {
  console.log(__dirname);

  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    // no errors
    next();
  } else {
    // unlink(
    //   `C:\\Users\\88019\\Downloads\\Compressed\\Vaccination-and-HealthCare-main\\server\\public\\uploads\\avatar\\${req.files[0].filename}`,
    //   (err) => {
    //     if (err) console.log(err);
    //   }
    // );

    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  signUpValidators,
  signUpValidatorHandler,
};
