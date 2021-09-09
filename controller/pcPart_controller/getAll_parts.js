const fs = require("fs");
const path = require("path");

const getAll_parts = (req, res, next) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../file.json"), "utf8")
    );
    console.log("request ", req.params);
    const partName = req.params.part;

    const nameParts = {};

    nameParts[partName] = Object.keys(data[partName]);
    res.json(nameParts);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getAll_parts;
