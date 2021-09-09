const Router = require("express-promise-router");

const storeRoute = Router();

storeRoute.get("/", (req, res) => {
  res.send("stores");
});

storeRoute.get("/:store", (req, res) => {
  res.send(`name: ${req.params.store}`);
});

storeRoute.get("/:store/items", (req, res) => {
  res.send(`items ${req.params.store}`);
});

module.exports = storeRoute;
