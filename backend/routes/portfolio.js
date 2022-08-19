const router = require("express").Router();
const Portfolio = require("../models/Portfolio");

// Create
router.post("/", async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
    longDescription: req.body.longDescription,
    imgUrl: req.body.imgUrl,
    technologies: req.body.technologies,
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
router.get("/:slug", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug,
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

// Update
router.patch("/:slug", async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.updateOne(
      {
        slug: req.params.slug,
      },
      {
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        imgUrl: req.body.imgUrl,
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
router.delete("/:slug", async (req, res) => {
  try {
    const name = await Portfolio.findOne({ slug: req.params.slug });
    await Portfolio.deleteOne({ slug: req.params.slug });

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
