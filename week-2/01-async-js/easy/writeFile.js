const fs = require("fs");
const filePath =
  "E:\\100x_Devs\\assignments\\week-2\\01-async-js\\easy\\input.txt";
fs.writeFile(filePath, "hi from new data added", "utf-8", function (err) {
  if (err) {
    console.log(err.message);
    return;
  } else {
    console.log("data written to the file!!!!");
  }
});
console.log("hi 1");
