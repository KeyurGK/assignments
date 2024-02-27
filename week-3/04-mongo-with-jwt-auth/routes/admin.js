const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  try {
    Admin.create({
      username: username,
      password: password,
    }).then(function () {
      res.status(200).json({
        msg: "Admin created successfully!!!",
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    Admin.find({
      username: username,
      password: password,
    }).then(function () {
      const jwtToken = jwt.sign({ username, password }, jwtPassword);
      res.status(200).json({
        token: jwtToken,
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const token = req.headers.authorization;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  try {
    Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    }).then(function (course) {
      res.status(200).json({
        msg: "Course Created Successfully!!!",
        courseId: course._id,
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  try {
    Course.find({}).then(function (courses) {
      res.status(200).json({
        courses: courses,
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

module.exports = router;
