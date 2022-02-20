// Import Libraries
const express = require("express");
// Import from my code
const course = require("../Schemas/course.schema");
//Main Code starts
const router = express.Router(); // router initialization

// When click on a course card this will give you the main course
router.get("/courseId=:courseID", async (req, res) => {
  try {
    let data = await course.findById(req.params.courseID).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json({ error: error.message });
  }
});
module.exports = router;
