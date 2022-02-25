const babyModel = require("../models/baby");
const { createEventForBaby } = require("./eventController");
const expressAsyncHandler = require("express-async-handler");
const { google } = require("googleapis");
const oauth2Client = require("../utilities/google/OAuth2");
const User = require("../models/user");
const getBaby = async (req, res) => {
  console.log(req.userData);
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

const addBaby = async (req, res, next) => {
  //   console.log(req.body);
  try {
    // console.log(req.body);
    // let token = localStorage.getItem("token");

    // const decode = jwt.verify(token, process.env.JWT_SECRATE);
    // console.log(decode);
    // console.log(token);
    // console.log(req.body);

    let baby = new babyModel(req.body);
    baby.guardian_name = req.userData.username;
    let response = await baby.save();
    createEventForBaby(req, res, next);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

module.exports = { addBaby, getBaby };
