const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  try {
    User.create({
      username: username,
      password: password,
    }).then(function () {
      res.status(200).json({
        msg: "User created Successfully!!!",
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.usernmae;
  const password = req.body.passowrd;
  try {
    User.find({
      username: username,
      password: password,
    }).then(function () {
      const jwtToken = jwt.sign(
        { usernmae: username, password: password },
        jwtPassword
      );
      res.status(200).json({
        token: jwtToken,
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;
  try {
    User.updateOne(
      {
        username: username,
      },
      {
        $push: { purchasedCourse: courseId },
      }
    ).then(function () {
      res.status(200).json({
        msg: "Course Purchased Successfully!!!",
      });
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  try {
    User.findOne({
      username: username,
    })
      .then(function (user) {
        Course.find({
          _id: {
            $in: user.purchasedCourses,
          },
        });
      })
      .then(function (courses) {
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
