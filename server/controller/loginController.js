const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// do login
async function login(req, res, next) {
  try {
    console.log(req.body);
    // find a user who has this email

    const user = await User.findOne({
      username: req.body.usernameL,
    });

    // console.log(req.body);
    ///  console.log(user);

    if (user && user._id) {
      const isValidPasswored = await bcrypt.compare(
        req.body.passwordL,
        user.password
      );
      console.log(isValidPasswored);
      if (isValidPasswored) {
        // prepare the user object to generate token
        const userObject = {
          email: user.email,
          phone: user.phone,
          username: user.username,
        };

        //generate token
        const token = jwt.sign(userObject, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        // set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        console.log("Logged In Successful");

        // set logged in users local identifiers
        res.locals.loggedInUser = userObject;
        // res.locals.isLoggedIn = true;

        if (req.body.usernameL == "admin") {
          res.json({ message: "admin logged in successfull... " });
        } else {
          res.json(" user Logged in successfull");
        }
      } else {
        throw createError("Login failed, please try again. 1");
      }
    } else {
      throw createError("Login failed, please try again. 2");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {
        usernameL: req.body.usernameL,
      },
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

// do logout
function logout(req, res) {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("Logged Out!");
}

module.exports = {
  login,
  logout,
};
