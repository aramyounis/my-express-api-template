const { Router } = require("express");

const userRoute = Router();

const user_controller = require("../../controller/user_controller");

userRoute.get("/:username", user_controller.getUser_info);

userRoute.get("/:username/items", user_controller.getUser_items);

module.exports = userRoute;
