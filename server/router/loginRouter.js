// external imports
const express = require("express");

// internal imports
const { login } = require("../controller/loginController");

const router = express.Router();

// process login
router.post("/", login);

module.exports = router;
