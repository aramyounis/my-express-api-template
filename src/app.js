require("module-alias/register");
const express = require("express");
const router = require("@/routers");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config({
  path: "../.dev.env",
});
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/api", router);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
