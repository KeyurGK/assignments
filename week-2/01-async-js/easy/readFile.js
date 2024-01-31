const fs = require("fs");
const filePath =
  "E:\\100x_Devs\\assignments\\week-2\\01-async-js\\easy\\input.txt";

fs.readFile(filePath, "utf-8", function (err, data) {
  if (err) {
    console.log(err.message);
    return;
  } else {
    console.log(data);
  }
});
console.log("hi1");
