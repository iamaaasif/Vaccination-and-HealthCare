// external imports
const express = require("express");

// internal imports
const { getAllUsers } = require("../controller/allUserController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");

const router = express.Router();

router.get("/", isAuthenticated, getAllUsers);

module.exports = router;
