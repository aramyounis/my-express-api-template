const Router = require("express-promise-router");

const {
  getSingleHardware_controller,
  getAllHardware_controller,
} = require("../../controller/hardware_controller");

const pcPart = Router();

pcPart.get("/", (req, res) => {
  res.send("get all parts");
});

pcPart.get("/:name", (req, res) => {
  res.send(`get info part ${req.params.name}`);
});

module.exports = pcPart;
