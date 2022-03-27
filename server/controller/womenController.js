const Woman = require("../models/pregnent_women");
const mongoose = require("mongoose");
const { createEventForPW } = require("./eventController");
const addWoman = (req, res, next) => {
  const newWoman = new Woman({
    ...req.body,
  });

  newWoman.guardian_name = req.userData.username;

  newWoman
    .save()
    .then((result) => {
      createEventForPW(req, res, next);
      res.status(201).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err,
      });
    });
};

const getWomen = (req, res, next) => {
  Woman.find().then((response) => {
    res.status(200).json(response);
    // .catch((err) => {
    //   res.status(500).json({
    //     err,
    //   });
    // });
  });
};

const updateWomen = async (req, res, next) => {
  try {
    const response = await Woman.findOneAndUpdate(
      { _id: req.params._id },
      {
        $set: req.body,
      }
    );

    res.status(200).json({
      response: "update successfully",
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};
const deleteWomen = async (req, res, next) => {
  try {
    const response = await Woman.findByIdAndDelete({ _id: req.params._id });

    res.status(200).json({
      response: "delete successfully",
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

module.exports = {
  addWoman,
  getWomen,
  updateWomen,
  deleteWomen,
};
