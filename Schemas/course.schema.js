const mongoose = require("mongoose");

// This is the schema of the main course
const courseSchema = mongoose.Schema({
  image: { type: String, require: true },
  heading: { type: String, require: true },
  small_heading: { type: String, require: true },
  rating: { type: Number, require: false },
  price: { type: Number, require: true },
  course_includes: [{ type: String, require: true }],
  video: { type: String, require: true },
  students: { type: Number, require: true },
  what_will_learn: { type: String, require: true },
  Description: { type: String, require: true },
  What_included: [{ type: String, require: true }],
  who_is_for: [{ type: String, require: true }],
  comment: [
    { type: mongoose.Schema.Types.ObjectId, require: false, ref: "comments" },
  ],
});

const course = mongoose.model("courses", courseSchema);

module.exports = course;
