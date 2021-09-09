const Router = require("express-promise-router");

const adminRoute = Router();

adminRoute.get("/", (req, res) => {
  res.send("admin page");
});

module.exports = adminRoute;
