const { Router } = require("express");

const authRoute = Router();

const auth_controller = require("@/controller/auth_controller");

authRoute.post("/Login", auth_controller.login);
authRoute.post("/Register", auth_controller.register);
authRoute.post("/RefreshToken", auth_controller.refreshToken);
authRoute.post("/logout", auth_controller.logout);
authRoute.post("/forgetPassword", auth_controller.forget_password);
authRoute.post("/changePassword", auth_controller.change_password);

module.exports = authRoute;
