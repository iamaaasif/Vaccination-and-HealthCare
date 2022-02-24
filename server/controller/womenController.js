const Woman = require("../models/pregnent_women");
const mongoose = require("mongoose");

const addWoman = (req, res, next) => {
  const newWoman = new Woman({
    ...req.body,
  });

  newWoman.guardian_name = req.userData.username;

  newWoman
    .save()
    .then((result) => {
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
    res
      .status(200)
      .json(response)
      .catch((err) => {
        res.status(500).json({
          err,
        });
      });
  });
};

module.exports = {
  addWoman,
  getWomen,
};
