const mongoose = require("mongoose");

const BabySchema = mongoose.Schema({
  bid: {
    type: int,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  guardian_name: {
    type: String,
  },
});

const Baby = mongoose.model("Baby", BabySchema);

module.exports = Baby;
