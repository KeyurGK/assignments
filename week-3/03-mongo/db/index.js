const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://kulkarnikeyurg:2aV0rdEyfk8eH4OF@cluster0.aueqqtg.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  Price: Number,
  imageLink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// app.post("/user", function (req, res) {
//   try {
//     User.create({
//       username: req.body.username,
//       password: req.body.password,
//     });
//     res.status(200).json({
//       msg: "done",
//     });
//   } catch (error) {
//     res.status(404),
//       json({
//         msg: "error",
//       });
//   }
// });

// app.get("/user", function (req, res) {
//   try {
//     username = req.body.username;
//     User.find({
//       username: username,
//     })
//       .then(function (userData) {
//         if (!userData || userData.length === 0) {
//           // No user found
//           res.status(404).json({ msg: "User does not exist!" });
//           return;
//         }
//         res.status(200).json({ userData });
//       })
//       .catch(function (error) {
//         // Handle query execution errors
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//       });
//   } catch (error) {
//     res.status(404).json({
//       msg: "User does not exist!",
//     });
//   }
// });

app.listen(3000);

module.exports = {
  Admin,
  User,
  Course,
};
