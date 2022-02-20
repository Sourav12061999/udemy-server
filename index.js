// Importing all necessery libraries
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Importing and using dotenv
// Importing from my own code
const connect = require("./Utils/mongoose-start"); // Importing the connecting function for mongodb
const comment = require("./Schemas/comments.schema");
const passport = require("./Utils/passport.js");
// Here I am importing all routes
const CatagoryRoute = require("./Controllers/getCatagory");
const CourseRoute = require("./Controllers/getCourse");
const CourseCardRoute = require("./Controllers/getCourseCard");
const passportRoute = require("./Controllers/passport.route");
const userRoute = require("./Controllers/getUser");
// Using Middlewares and app inialization

const app = express(); // app initialization of express
app.use(cors()); // Using the cors package
app.use(express.json());
// Using the routes
// Routes for getting Data
app.get("/", async (req, res) => {
  res.send("All Ok");
});
app.use("/AllCatagories", CatagoryRoute);
app.use("/Courses", CourseRoute);
app.use("/CourseCard", CourseCardRoute);
app.use("/userSignup", passportRoute);
app.use("/getuser", userRoute);
//Route for Passport
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    // successRedirect: "https://udemy-clone-front-end.vercel.app/",
    failureRedirect: `https://udemy-clone-front-end.vercel.app/`,
    session: false,
  }),
  function (req, res) {
    if (req.user) {
      res.cookie("udemy-clone-signin", req.user._id.toString());
    }
    res.redirect(`https://udemy-clone-front-end.vercel.app/`);
  }
);
// app.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: `https://udemy-clone-front-end.vercel.app/`,
//     failureRedirect: `https://udemy-clone-front-end.vercel.app/`,
//     session: false,
//   })
// );
connect(); // Here connecting with mongodb
// After the connecting has been made starting the server
let PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server Started`);
});
