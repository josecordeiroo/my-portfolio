const mongoose = require('mongoose')
const slug = require('slug')

const { Schema } = mongoose

const portfolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.title)}
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('portfolio', portfolioSchema)