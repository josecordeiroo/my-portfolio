const router = require('express').Router()
require('../db/mongoConnection')

const portfolio = require('./portfolio')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: '/api is just for server'
    })
})

router.use('/portfolio', portfolio)

module.exports = router