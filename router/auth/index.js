const Router = require("express-promise-router");

const authRoute = Router();

authRoute.post("/Login", (req, res) => {
  res.send("Login");
});

authRoute.post("/Register", (req, res) => {
  res.send("Register");
});

authRoute.post("/RefreshToken", (req, res) => {
  res.send("RefreshToken");
});

authRoute.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = authRoute;
