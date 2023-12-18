const mongoose = require("mongoose");

//Define mongoose Schema
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
  });
  
// Define mongoose models
const Course = mongoose.model('Course', courseSchema);

module.exports = Course