const router = require('express').Router()
const Portfolio = require('../models/Portfolio')

// Create
router.post('/', async (req, res) => {

    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

router.get('/', async (req, res) => {

    try {
        const portfolio = await Portfolio.find()

        res.json({
            success: true,
            data: portfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

// Read
router.get('/:slug', async (req, res) => {

    try {
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            data: portfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

    res.json()
})

// Update
router.patch('/:slug', async (req, res) => {
    try {

        const updatedPortfolio = await Portfolio.findOneAndUpdate({
            slug: req.params.slug
        },
            {
                title: req.body.title,
                description: req.body.description
            })

        res.json({
            success: true,
            data: updatedPortfolio
        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

// Delete
router.delete('/:slug', async (req, res) => {
    try {
        const deletedPortfolio = await Portfolio.findOneAndDelete({
            slug: req.params.slug
        })

        res.json({
            success: true,
            data: deletedPortfolio
        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

module.exports = router