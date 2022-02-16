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

//This is just to congigure the facebook signin/signup
router.get("/auth/facebook", passport.authenticate("facebook"));
module.exports = router;
