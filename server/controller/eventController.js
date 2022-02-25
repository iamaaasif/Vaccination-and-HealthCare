const expressAsyncHandler = require("express-async-handler");
const { google } = require("googleapis");
const oauth2Client = require("../utilities/google/OAuth2");
const User = require("../models/user");

const createToken = expressAsyncHandler(async (req, res) => {
  try {
    const { code } = req.body;
    const email = req.userData.email;
    console.log(email);
    const temp = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "http://localhost:3000"
    );
    const response = await temp.getToken(code);
    console.log(response);
    const { tokens } = response;
    const { refresh_token } = tokens;
    console.log(`Response Is : ${tokens}`);

    const user = await User.findOneAndUpdate(
      { email },
      { refresh_token: refresh_token },
      { new: true }
    );

    if (user && user.refresh_token != "") {
      console.log("Refresh token successfully updated");
      res.status(200);
    } else {
      res.status(500);
      throw new Error(
        "There was some issue occure while updating the refresh token"
      );
    }

    //
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(
      "There was some issue occure while creating the refresh token"
    );
  }
});

const haveRefreshToken = expressAsyncHandler(async (req, res) => {
  const email = req.userData.email;
  //   console.log(req.user.email);
  const user = await User.findOne({ email });

  //   console.log(user);

  const refresh_token = user.refresh_token;
  //   console.log(refresh_token);
  if (refresh_token === "") {
    res.status(400).json({ has_token: "no" });
  } else {
    res.status(200).json({ has_token: "yes" });
  }
});

// @desc create an event in google calandar
// @route POST /api/event/create-event
// @access Private

const createEventForBaby = expressAsyncHandler(async (req, res, next) => {
  try {
    const { name, vaccines } = req.body;
    const email = req.userData.email;
    const user = await User.findOne({ email });

    const refresh_token = user.refresh_token;
    // console.log(`user ${refresh_token}`);
    const temp = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "http://localhost:3000/Bvaccine"
    );
    temp.setCredentials({ refresh_token });
    const calendar = google.calendar("v3");
    let response;
    for (let i = 0; i < vaccines.length; i++) {
      calendar.events.insert({
        auth: temp,
        calendarId: "primary",
        requestBody: {
          summary: name + " -  " + vaccines[i].vaccine_name,
          description:
            vaccines[i].vaccine_name + "  Dose No: " + vaccines[i].dose_no,
          location: "Nearest Vaccination Center",
          colorId: "7",
          start: {
            dateTime: new Date(vaccines[i].vaccine_date),
          },
          end: {
            dateTime: new Date(vaccines[i].vaccine_date + 43200000),
          },
        },
      });

      // response.push(temp_res);
    }

    // res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "There was some issue!" });
  }
});
// @desc create an event in google calandar
// @route POST /api/event/create-event
// @access Private

const createEventForPW = expressAsyncHandler(async (req, res, next) => {
  try {
    const { name, vaccines } = req.body;
    const email = req.userData.email;
    const user = await User.findOne({ email });

    const refresh_token = user.refresh_token;
    // console.log(`user ${refresh_token}`);

    const temp = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "http://localhost:3000/Wvaccine"
    );
    temp.setCredentials({ refresh_token });
    const calendar = google.calendar("v3");
    // let response;
    for (let i = 0; i < vaccines.length; i++) {
      const temp_res = calendar.events.insert({
        auth: temp,
        calendarId: "primary",
        requestBody: {
          summary: name + " -  " + vaccines[i].vaccine_name,
          description:
            vaccines[i].vaccine_name + "  Dose No: " + vaccines[i].dose_no,
          location: "Nearest Vaccination Center",
          colorId: "6",
          start: {
            dateTime: new Date(vaccines[i].vaccine_date),
          },
          end: {
            dateTime: new Date(vaccines[i].vaccine_date + 43200000),
          },
        },
      });

      // response.push(temp_res);
    }

    // res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "There was some issue!" });
  }
});
module.exports = {
  createEventForPW,
  createEventForBaby,
  createToken,
  haveRefreshToken,
};
