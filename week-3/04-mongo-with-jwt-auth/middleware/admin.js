// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwtPassword = "secretkey";
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const bearerToken = req.headers.authorization;
  const splitToken = bearerToken.split(" ");
  const jwtToken = splitToken[1];

  try {
    const decode = jwt.verify(jwtToken, jwtPassword);
    if (decode.username) {
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

module.exports = adminMiddleware;
