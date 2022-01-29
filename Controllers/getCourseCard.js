// Importing Libraries
const express = require("express");
// Inporting from my code
const courseCard = require("../Schemas/courseCard.schema"); //Importing the courseCards model

// Main code starts
const router = express.Router(); // Router initialization

//This is for home page where all products are shown
router.get("/", async (req, res) => {
  try {
    let data = await courseCard.find({}).limit(10).lean().exec(); // Sending the data with a limit of 10
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
module.exports = router;
