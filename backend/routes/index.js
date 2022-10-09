const router = require('express').Router()
require('../db/mongoConnection')

const portfolio = require('./portfolio')
const user = require('./user')
const aboutMe = require('./aboutMe')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: '/api is just for server'
    })
})

router.use('/portfolio', portfolio)
router.use('/users', user)
router.use('/admin', aboutMe)

module.exports = router