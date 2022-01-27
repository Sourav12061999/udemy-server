const mongoose = require("mongoose");

// Here making the model or schema for users. User will have name , email,password, courses that
// are in cart and courses the are already bought
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  cartCourses: [
    { type: mongoose.Schema.Types.ObjectId, unique: true, required: false },
  ],
  boughtCourses: [
    { type: mongoose.Schema.Types.ObjectId, unique: true, required: false },
  ],
});

const user = mongoose.model("users", userSchema);

module.exports = user;
