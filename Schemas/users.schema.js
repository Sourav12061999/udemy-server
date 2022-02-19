const mongoose = require("mongoose");

// Here making the model or schema for users. User will have name , email,password, courses that
// are in cart and courses the are already bought
const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  cartCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: false,
      ref: "courseCards",
    },
  ],
  boughtCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: false,
      ref: "courseCards",
    },
  ],
});

const user = mongoose.model("users", userSchema);

module.exports = user;
