// external imports
const express = require("express");

// internal imports
const { addBaby, getBaby } = require("../controller/babyController");

const router = express.Router();

// process login
router.post("/", addBaby);
router.get("/", getBaby);

module.exports = router;
