const mongoose = require("mongoose");

//Define mongoose Schema
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
  });

//Define mongoose schema model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;