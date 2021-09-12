const item_service = require("@/services/item_service");

const getSingle_item = (req, res, next) => {
  res.send(item_service.getSingle_item(req.params.id));
};

module.exports = getSingle_item;
