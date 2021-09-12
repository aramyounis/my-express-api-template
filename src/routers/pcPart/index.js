const { Router } = require("express");
const pcPartRoute = Router();
const pcPart_controller = require("@/controller/pcPart_controller");

pcPartRoute.get("/:part", pcPart_controller.getAll_parts);
pcPartRoute.get("/:part/:name", pcPart_controller.getSingle_part);

module.exports = pcPartRoute;
