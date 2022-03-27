// external imports
const express = require("express");

// internal imports
const { getAllUsers, updateUser } = require("../controller/allUserController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");

const router = express.Router();

router.get("/", isAuthenticated, getAllUsers);
router.put("/:_id", updateUser);

module.exports = router;
