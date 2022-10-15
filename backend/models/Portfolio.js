const mongoose = require("mongoose");
const slug = require("slug");

const { Schema } = mongoose;

const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return slug(this.title);
    },
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
  },
  img: [
    {
      url: String,
    },
  ],
  technologies: [
    {
      label: String,
      icon: String,
      iconType: String,
    },
  ],
  isDone: {
    type: Boolean,
    default: false
  }
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("portfolio", portfolioSchema);
