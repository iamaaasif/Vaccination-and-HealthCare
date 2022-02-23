const Woman = require("../models/pregnent_women");
const mongoose = require("mongoose");

const addWoman = (req, res, next) => {
  const newWoman = new Woman({
    ...req.body,
  });

  newWoman
    .save()
    .then((result) => {
      res.status(201).json({
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
};
