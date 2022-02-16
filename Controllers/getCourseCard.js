// Importing Libraries
const express = require("express");
// Inporting from my code
const courseCard = require("../Schemas/courseCard.schema"); //Importing the courseCards model
const catagory = require("../Schemas/catagories.schema");
// Main code starts
const router = express.Router(); // Router initialization

//This is for when user clicks on a peticular catagory and that data shows up
router.get("/getCatagory/:name", async (req, res) => {
  try {
    let data = await catagory.findOne({ name: req.params.name }).lean().exec(); // Sending the data with a limit of 10
    res.status(200).json(data);
  } catch (error) {
    res.send(300).json({ error }); // If an error occours send the error message with a status code of 300
  }
});

// This is for when user click on a specific catagory
router.get("/getCards/catagory=:catagoryName", async (req, res) => {
  try {
    let data = await courseCard
      .find({ catagory: req.params.catagoryName })
      .limit(10)
      .lean()
      .exec();
    res.status(200).json(data);
  } catch (error) {
    res.send(300).json({ error }); // If an error occours send the error message with a status code of 300
  }
});

router.get("/getCards/courseID=:courseID", async (req, res) => {
  try {
    let cardData = await courseCard
      .findOne({ course_id: req.params.courseID })
      .lean()
      .exec();
    let data = await courseCard.find({
      $and: [{ catagory: cardData.catagory }, { $ne: { _id: cardData._id } }],
    });
    res.status(200).json(data);
  } catch (error) {
    res.send(300).json({ error }); // If an error occours send the error message with a status code of 300
  }
});

router.get("/getCards/cardID=:cardID", async (req, res) => {
  try {
    let data = await courseCard.findById(req.params.cardID).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.send(300).json({ error }); // If an error occours send the error message with a status code of 300
  }
});

router.get("/getCards/Search=:word", async (req, res) => {
  try {
    let data = await courseCard.find({ heading: { $regex: req.params.word } });
    res.status(200).json(data);
  } catch (error) {
    res.send(300).json({ error });
  }
});
module.exports = router;
