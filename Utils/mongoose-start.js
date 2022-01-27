// Importing Libraries
const mongoose = require("mongoose");
// Connecting with the mongodb database
const connect = async () => {
  await mongoose.connect(
    process.env.mongoose_connect // Importing the mongoose connection url with password from .env file
  );
};

module.exports = connect; // Exporting the connect function
