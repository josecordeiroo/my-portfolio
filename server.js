const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
require('../my-portfolio/backend/db/mongoConnection')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        success: true,
        text: "Home Page"
    })
})

const api = require('./backend/routes')

app.use('/api', api)



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is connected')
})