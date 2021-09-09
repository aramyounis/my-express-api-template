const { Router } = require("express");

const adminRoute = Router();

adminRoute.get("/", (req, res) => {
  res.send("admin page");
});

module.exports = adminRoute;
