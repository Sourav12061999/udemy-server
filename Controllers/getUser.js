// Importing Libraries
const express = require("express");
const user = require("../Schemas/users.schema");

const router = express.Router(); // Router initialization
router.put("/updateCard/:id", async (req, res) => {
  try {
    let data = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json(error);
  }
});
router.get("/userID=:id", async (req, res) => {
  try {
    let data = await user.findById(req.params.id).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json(error);
  }
});

router.put("/deleteCart/:id", async (req, res) => {
  try {
    let data = await user
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(300).json(error);
  }
});
module.exports = router;
