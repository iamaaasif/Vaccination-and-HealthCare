// external imports
const express = require("express");

//internal imports
const {
  createEventForPW,
  createEventForBaby,
  createToken,
  haveRefreshToken,
} = require("../controller/eventController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");

const router = express.Router();

router.get("/token/refresh", isAuthenticated, haveRefreshToken);
router.post("/token/create", isAuthenticated, createToken);
router.post("/baby/create", isAuthenticated, createEventForBaby);
router.post("/pw/create", isAuthenticated, createEventForPW);

module.exports = router;
