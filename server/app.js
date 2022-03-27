// external import
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

//internal import
const registrationRouter = require("./router/registrationRouter");
const loginRouter = require("./router/loginRouter");
const babyRoute = require("./router/babyRoute");
const womenRoute = require("./router/womenRoute");
const allUserRoute = require("./router/allUserRoute");
const eventRouter = require("./router/eventRouter");

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
app.use("/api/register", registrationRouter);
app.use("/api/login", loginRouter);
app.use("/api/baby", babyRoute);
app.use("/api/women", womenRoute);
app.use("/api/users", allUserRoute);
app.use("/api/event", eventRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening at port ${process.env.PORT}`);
});
