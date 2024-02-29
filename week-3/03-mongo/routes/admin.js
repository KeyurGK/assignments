const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    Admin.create({
      username: username,
      password: password,
    });

    res.status(200).json({
      msg: "Admin signup successful!!!",
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
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
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    Course.find({}).then(function (courses) {
      res.status(200).json({ courses });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }

  // Implement fetching all courses logic
});

module.exports = router;
