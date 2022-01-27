// Importing all necessery libraries
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Importing and using dotenv
// Importing from my own code
const connect = require("./Utils/mongoose-start"); // Importing the connecting function for mongodb
// Using Middlewares and app inialization

const app = express(); // app initialization of express
app.use(cors()); // Using the cors package

connect(); // Here connecting with mongodb
// After the connecting has been made starting the server
app.listen(80, () => {
  console.log("Server Started");
});
