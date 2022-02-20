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

router.post("/Signup", async (req, res) => {
  let User;
  try {
    User = await user.findOne({ email: req.body.email }).lean().exec();
    if (User) {
      res.status(300).json("user already exists");
    } else {
      let data = await user.create({
        ...req.body,
        cartCourses: [],
        boughtCourses: [],
      });
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(303).json(error);
  }
});
router.put("/Signin", async (req, res) => {
  let User;
  try {
    User = await user.findOne({ email: req.body.email }).lean().exec();
    if (!User) {
      res.send("User Doesn't exist");
    } else if (User.password != req.body.password) {
      res.send("Invalid Email-ID or Password");
    } else {
      res.status(200).json(User);
    }
  } catch (error) {
    res.status(303).json(error);
  }
});
module.exports = router;
