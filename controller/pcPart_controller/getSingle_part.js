const fs = require("fs");
const path = require("path");

const loadItemsPage = require("../../helper/getItemPart");

const getSingle_part = async (req, res, next) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../file.json"), "utf8")
    );
    const itemIsExisted = data[req.params.part].hasOwnProperty(req.params.name);
    if (itemIsExisted) {
      const itemInfo = await loadItemsPage(
        data[req.params.part][req.params.name]
      );
      res.json(itemInfo);
    } else {
      res.json({
        error: "this item not exist",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = getSingle_part;
