const mongoose = require("mongoose");

const { Schema } = mongoose;

let aboutSchema = new Schema({
    name: String,
    description: String,
  });

  module.exports = mongoose.model("AboutMe", aboutSchema);