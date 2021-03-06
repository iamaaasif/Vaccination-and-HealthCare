// external imports
const express = require("express");

// internal imports
const { addBaby, getBaby } = require("../controller/babyController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");

const router = express.Router();

// process login
router.post("/", isAuthenticated, addBaby);
router.get("/", isAuthenticated, getBaby);

module.exports = router;
