const express = require("express")
const router = express.Router();

const UserController = require('../controllers/user.controller')
const {SECRET, authenticateJwt} = require('../middleware/auth')

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.get("/courses", authenticateJwt, UserController.courses);

router.post("/courses/:courseId", authenticateJwt, UserController.addCourse);

router.get("/purchasedCourses", authenticateJwt, UserController.purchasedCourses);

module.exports = router