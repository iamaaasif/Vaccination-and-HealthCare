// external imports
const express = require("express");

// internal imports
const { addWoman, getWomen } = require("../controller/womenController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");

const router = express.Router();

// process login
router.post("/", isAuthenticated, addWoman);
router.get("/", isAuthenticated, getWomen);

module.exports = router;
