const mongoose = require("mongoose");

// This is the schema of the main course
const commentSchema = mongoose.Schema({
  heading: String,
  body: String,
  rating: Number,
  userID: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "users" },
});

const comments = mongoose.model("comments", commentSchema);

module.exports = comments;
