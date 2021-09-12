const { Router } = require("express");
const storeRoute = Router();
const store_controller = require("@/controller/stroe_controller");

storeRoute.get("/", store_controller.getAll_stores);
storeRoute.get("/:store", store_controller.getStore_info);
storeRoute.get("/:store/items", store_controller.getStore_items);

module.exports = storeRoute;
