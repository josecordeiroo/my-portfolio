const router = require('express').Router()
require('../db/mongoConnection')

const portfolio = require('./portfolio')
const user = require('./user')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: '/api is just for server'
    })
})

router.use('/portfolio', portfolio)
router.use('/user', user)

module.exports = router