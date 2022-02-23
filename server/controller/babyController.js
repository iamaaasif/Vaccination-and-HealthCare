const babyModel = require("../models/baby");
const createError = require("http-errors");

const getBaby = async (req, res) => {
  //   console.log("conne");
  try {
    // console.log("sss");
    let response = await babyModel.find();
    res.json(response);
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

const addBaby = async (req, res) => {
  //   console.log(req.body);
  try {
    // console.log(req.body);
    // let token = localStorage.getItem("token");

    // const decode = jwt.verify(token, process.env.JWT_SECRATE);
    // console.log(decode);
    // console.log(token);
    // console.log(req.body);

    let baby = new babyModel(req.body);
    let response = await baby.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

module.exports = { addBaby, getBaby };
