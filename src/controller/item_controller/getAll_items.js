const item_service = require("@/services/item_service");

const getAll_items = (req, res, next) => {
  res.send(item_service.getAll_items());
};

module.exports = getAll_items;
