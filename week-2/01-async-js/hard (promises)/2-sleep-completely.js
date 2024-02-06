/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res();
    }, milliseconds);
  });
}
sleep(1000).then(function () {
  console.log("Sleep completed"); // This function will be executed after the sleep is completed
});
module.exports = sleep;
