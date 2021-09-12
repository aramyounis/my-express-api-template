const item_service = require("@/services/item_service");

const delete_item = (req, res, next) => {
  res.send(item_service.delete_item(req.params.id));
};

module.exports = delete_item;
