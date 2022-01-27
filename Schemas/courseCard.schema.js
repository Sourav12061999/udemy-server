const mongoose = require("mongoose");
// This is the schema for the course cards which will be displayed in the home page.
// Small details about the courses with an image
// Clicking on these cards will open up the main course
const courseCardSchema = mongoose.Schema({
  image: { type: String, require: true },
  heading: { type: String, require: true },
  author: { type: String, require: true },
  rating: { type: Number, require: false },
  price: { type: Number, require: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, require: true },
  catagory: { type: String, require: true },
});

const courseCard = mongoose.model("courseCards", courseCardSchema);
module.exports = courseCard;
