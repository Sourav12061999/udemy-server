//Importing Libraries
const express = require("express");
//Imported the password configuration
const passport = require("../Utils/passport.js");

// Acctual logic starts from here

const router = express.Router();

//This is just to congigure the google signin/signup
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "email", "profile"],
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.front_end_page}/login`,
    successRedirect: `${process.env.front_end_page}/`,
    session: false,
  }),
  function (req, res) {
    res.redirect(`${process.env.front_end_page}/`);
  }
);

//This is just to congigure the facebook signin/signup
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: `${process.env.front_end_page}/`,
    failureRedirect: `${process.env.front_end_page}/login`,
    session: false,
  })
);
module.exports = router;
