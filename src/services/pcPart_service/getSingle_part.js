const fs = require("fs");
const path = require("path");

const loadItemsPage = require("../../helpers/getItemPart");

const getSingle_part = async (part, name) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../file.json"), "utf8")
    );
    const itemIsExisted = data[part].hasOwnProperty(name);
    if (itemIsExisted) {
      const itemInfo = await loadItemsPage(data[part][name]);
      return itemInfo;
    } else {
      return {
        error: "this item not exist",
      };
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = getSingle_part;
