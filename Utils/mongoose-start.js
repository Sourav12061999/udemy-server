// Importing Libraries
const mongoose = require("mongoose");
// Connecting with the mongodb database
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://Sourav:Sourav1999@cluster0.jbmyk.mongodb.net/udemy-clone" // Importing the mongoose connection url with password from .env file
  );
};

module.exports = connect; // Exporting the connect function
