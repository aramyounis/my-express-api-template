const fs = require("fs");
const path = require("path");

const getAll_parts = (partName) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../file.json"), "utf8")
    );
    const nameParts = {};
    nameParts[partName] = Object.keys(data[partName]);
    return nameParts;
  } catch (err) {
    console.error(err);
  }
};

module.exports = getAll_parts;
