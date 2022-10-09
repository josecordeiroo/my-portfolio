const router = require("express").Router();
const AboutMe = require("../models/AboutMe");

const withAuth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

router.get("/:id", async (req, res) => {
  try {
    const about = await AboutMe.findOne({ _id: req.params.id });
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
    await AboutMe.updateOne(
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

// no use anymore
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

module.exports = router;
