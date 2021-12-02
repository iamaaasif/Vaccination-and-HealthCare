// external imports
const express = require("express");
const router = express.Router();
const avatarUpload = require("../middlewares/users/avatarUpload");

// internal imports
const { userRegistration } = require("../controller/registrationController");
const {
  signUpValidators,
  signUpValidatorHandler,
} = require("../middlewares/users/userValidator");

// post
router.post(
  "/",
  avatarUpload,
  signUpValidators,
  signUpValidatorHandler,
  userRegistration
);

module.exports = router;
