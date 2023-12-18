const Admin = require('../models/Admin')
const Course = require('../models/Course')
const jwt = require('jsonwebtoken')
const {SECRET} = require('../middleware/auth')

async function signup(req, res){
    const { username, password } = req.body;
    
    const admin = await Admin.findOne({ username });
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }
}

async function login(req, res){
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
}

async function saveCourse(req, res){
  const course = new Course(req.body);
  await course.save();
  res.json({ message: 'Course created successfully', courseId: course.id });
}

async function editCourse(req, res){
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
}

async function getCourse(req, res){
  const course = await Course.findById(req.params.courseId);

  if (course) {
    res.json({course});
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
}

async function courses(req, res){
  const courses = await Course.find({});
  res.json({ courses });
}

async function me(req, res){
  res.json({
    username: req.user.username
  })
}

const AdminController = {
  signup, login, saveCourse, editCourse, getCourse, courses, me
}

module.exports = AdminController


