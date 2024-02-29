const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    User.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      msg: "User created succesfully!!!",
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.get("/courses", (req, res) => {
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
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const password = req.headers.password;
  const courseId = req.params.courseId;

  User.updateOne(
    {
      username: username,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  ).then(function () {
    res.status(200).json({
      msg: "Course Purchased Successfully!!!",
    });
  });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username: username,
  })
    .then(function (user) {
      return Course.find({
        _id: {
          $in: user.purchasedCourses,
        },
      });
    })
    .then(function (courses) {
      res.status(200).json({
        purchasedCourses: courses,
      });
    });
});

module.exports = router;
