const jwt = require("jsonwebtoken");
const jwtPassword = "seret key";

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const bearerToken = req.headers.authorization;
  const splitToken = bearerToken.split(" ");
  const jwtToken = splitToken[1];

  try {
    const verifiedToken = jwt.verify(jwtToken, jwtPassword);
    if (verifiedToken.username) {
      next();
    } else {
      res.status(404).json({
        msg: "You are not authenticated!!!",
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Invalid Authentication!!!",
    });
  }
}

module.exports = userMiddleware;
