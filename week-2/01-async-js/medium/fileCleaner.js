const fs = require("fs");
const filePath =
  "E:\\100x_Devs\\assignments\\week-2\\01-async-js\\easy\\input.txt";

function fileReader() {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        const newData = data.split(" ").join("");
        resolve(newData);
      }
    });
  });
}
function fileWriter(newData) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filePath, newData, "utf-8", function (err) {
      if (err) {
        console.log(err.message);
      } else {
        resolve();
        console.log("data succesfully edited!!!");
      }
    });
    6;
  });
}
function fileCleaner() {
  fileReader()
    .then(function (newData) {
      return fileWriter(newData);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

fileCleaner();
