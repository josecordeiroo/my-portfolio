const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: '/api is just for server'
    })
})

const portfolio = require('./portfolio')

router.use('/portfolio', portfolio)

module.exports = router