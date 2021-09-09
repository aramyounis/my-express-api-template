const Router = require("express-promise-router");
const router = Router();

const authRoute = require("./auth");
const itemRoute = require("./item");
const storeRoute = require("./store");
const pcPartRoute = require("./pcPart");

router.use("/auth", authRoute);
router.use("/item", itemRoute);
router.use("/store/", storeRoute);
router.use("/pcPart", pcPartRoute);

module.exports = router;
