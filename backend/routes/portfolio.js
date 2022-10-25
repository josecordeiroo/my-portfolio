const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

const withAuth = require("../middlewares/auth");

// Create
router.post("/", withAuth, async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    images: req.body.images,
    technologies: req.body.technologies,
    createdAt: req.body.date,
  });

  try {
    const savedPortfolio = await portfolio.save();
    res.json({
      success: true,
      data: savedPortfolio,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

// Read One
router.get("/:id", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      _id: req.params.id,
    });

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.json(portfolio);
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

// Update
router.patch("/:id", withAuth, async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.updateOne(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        images: req.body.images,
        technologies: req.body.technologies
      }
    );

    res.json({
      success: true,
      updated: updatedPortfolio.modifiedCount,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

// Delete
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const name = await Portfolio.findOne({ _id: req.params.id });
    await Portfolio.deleteOne({ _id: req.params.id});

    res.json({
      success: true,
      message: `${name.title} foi deletado.`,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

module.exports = router;
