const router = require("express").Router();
const AboutMe = require("../models/AboutMe");

const jwt = require("jsonwebtoken");

const withAuth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

require("dotenv").config();
const secret = process.env.JWT_TOKEN;

// router.post("/", async (req, res) => {
//   const about = new AboutMe({
//     name: req.body.name,
//     description: req.body.description,
//   });
//   try {
//     await about.save();
//     res.status(200).json(about);
//   } catch (err) {
//     res.status(500).json({ error: "Error registering new informations" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const about = await AboutMe.find();
    res.json(about);
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.patch("/:id", withAuth, isAdmin, async (req, res) => {
  try {
    const updatedAbout = await AboutMe.updateOne(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        description: req.body.description,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

module.exports = router;
