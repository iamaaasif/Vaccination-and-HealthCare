const mongoose = require("mongoose");

const PWSchema = mongoose.Schema({
  nationalID: {
    type: int,
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
  guardian_name: {
    type: mongoose.Types.ObjectId,
    ref: "Guardian",
  },
});

const PW = mongoose.model("Pregnent_Women", PWSchema);

module.exports = PW;
