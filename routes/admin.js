const express = require("express")
const router = express.Router();

const AdminController = require('../controllers/admin.controller')
const {SECRET, authenticateJwt} = require('../middleware/auth')

router.post("/signup", AdminController.signup);
  
router.post("/login", AdminController.login);
  
router.post("/courses", authenticateJwt, AdminController.saveCourse);
  
router.put("/courses/:courseId", authenticateJwt, AdminController.editCourse);
  
router.get("/course/:courseId", authenticateJwt, AdminController.getCourse);

router.get("/courses", authenticateJwt, AdminController.courses);

router.get("/me", authenticateJwt, AdminController.me);

module.exports = router;