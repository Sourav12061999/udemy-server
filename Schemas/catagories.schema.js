const mongoose = require("mongoose");

const catagorySchema = mongoose.Schema({
  name: { type: String, require: true, unique: true },
  subcat: [{ type: String, require: true, unique: true }],
});

const catagories = mongoose.model("catagories", catagorySchema);

module.exports = catagories;
