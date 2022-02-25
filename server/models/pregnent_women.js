const mongoose = require("mongoose");

const PWSchema = mongoose.Schema({
  nationalID: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  monthOfPregnency: {
    type: String,
    required: true,
  },
  vaccines: [],
  guardian_name: {
    type: String,
  },
});

const PW = mongoose.model("Pregnent_Women", PWSchema);

module.exports = PW;
