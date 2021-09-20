const { Router } = require("express");

const authRoute = Router();

const auth_controller = require("@/controller/auth_controller");

authRoute.post("/login", auth_controller.login);
authRoute.post("/register", auth_controller.register);
authRoute.post("/logout", auth_controller.logout);

module.exports = authRoute;
