const { Router } = require("express");
const itemRoute = Router();
const item_controller = require("../../controller/item_controller");

itemRoute.get("/", item_controller.getAll_items);
itemRoute.post("/", item_controller.create_item);
itemRoute.get("/:id", item_controller.getSingle_item);
itemRoute.put("/:id", item_controller.update_item);
itemRoute.delete("/:id", item_controller.delete_item);

module.exports = itemRoute;
