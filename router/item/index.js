const Router = require("express-promise-router");
const itemRoute = Router();

itemRoute.get("/", (req, res, next) => {
  res.send("show all items");
});

itemRoute.post("/", (req, res, next) => {
  res.send(`create new item`);
});

itemRoute.get("/:id", (req, res, next) => {
  res.send(`show single item ${req.params.id} `);
});

itemRoute.put("/:id", (req, res, next) => {
  res.send(`update item ${req.params.id}`);
});

itemRoute.delete("/:id", (req, res, next) => {
  res.send(`delete item ${req.params.id}`);
});

module.exports = itemRoute;
