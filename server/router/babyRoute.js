// external imports
const express = require("express");

// internal imports
const {
  addBaby,
  getBaby,
  updateBaby,
  deleteBaby,
} = require("../controller/babyController");
const isAuthenticated = require("../middlewares/users/isAuthenticated");
const { datesForBabyVaccine } = require("../middlewares/eventDates");
const router = express.Router();

// process login
router.post("/", isAuthenticated, datesForBabyVaccine, addBaby);
router.get("/", isAuthenticated, getBaby);
router.put("/:_id", updateBaby);
router.delete("/:_id", deleteBaby);

module.exports = router;
