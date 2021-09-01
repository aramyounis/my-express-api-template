const Router = require("express-promise-router");

const authRoute = require("./auth");
const itemRoute = require("./item");
const storeRoute = require("./store");
const hardwareRoute = require("./pcHardware");

const router = Router();

router.use("/auth", authRoute);

router.use("/item", itemRoute);

router.use("/store/", storeRoute);

router.use("/hardware", hardwareRoute);

module.exports = router;
