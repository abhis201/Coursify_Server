const mongoose = require("mongoose");

// Define mongoose schema
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });

// Define mongoose model
const User = mongoose.model('User', userSchema);

module.exports = User