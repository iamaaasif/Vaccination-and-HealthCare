const mongoose = require("mongoose");

const BabySchema = mongoose.Schema({
  birthID: {
    type: Number,
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
  birthDate: {
    type: Date,
    required: true,
  },
  vaccines: [],
  guardian_name: {
    type: String,
  },
});

const Baby = mongoose.model("Baby", BabySchema);

module.exports = Baby;
