// external import
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

//internal import
const registrationRouter = require("./router/registrationRouter");
const loginRouter = require("./router/loginRouter");

// initialization

const app = express();
dotenv.config();
app.use(express.static(path.join(__dirname, "../client/public")));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for html form data

// set cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
app.use("/register", registrationRouter);
app.use("/login", loginRouter);
app.listen(process.env.PORT, () => {
  console.log(`listening at port ${process.env.PORT}`);
});
