const mongoose = require("mongoose");

const PWSchema = mongoose.Schema({
  nid: {
    type: int,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mop: {
    type: String,
    required: true,
  },
  guardian_name: {
    type: String,
  },
});

const PW = mongoose.model("Pregnent_Women", PWSchema);

module.exports = PW;
