// Importing all necessery libraries
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); // Importing and using dotenv
// Importing from my own code
const comments = require("./Schemas/comments.schema");
const connect = require("./Utils/mongoose-start"); // Importing the connecting function for mongodb
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
app.use(cookieParser());
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
connect(); // Here connecting with mongodb
// After the connecting has been made starting the server
let PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server Started`);
});
