// Importing Libraries
const express = require("express");
// Inporting from my code
const catagory = require("../Schemas/catagories.schema"); //Importing the catagory model

// Main code starts
const router = express.Router(); // Router initialization

// This is for getting all the catagories in the homepage
router.get("/", async (req, res) => {
  try {
    let data = await catagory.find({}).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json({ error });
  }
});
