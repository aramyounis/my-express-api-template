const { Router } = require("express");

const router = Router();
const authRoute = require("./auth");
const itemRoute = require("./item");
const storeRoute = require("./store");
const pcPartRoute = require("./pcPart");
const userRoute = require("./user");

router.use("/auth", authRoute);
router.use("/items", itemRoute);
router.use("/store", storeRoute);
router.use("/pcPart", pcPartRoute);
router.use("/user", userRoute);

module.exports = router;
