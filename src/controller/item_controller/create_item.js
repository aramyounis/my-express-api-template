const item_service = require("@/services/item_service");

const create_item = (req, res, next) => {
  res.send(item_service.create_item());
};

module.exports = create_item;
