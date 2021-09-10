const item_service = require("../../services/item_service");

const update_item = (req, res, next) => {
  res.send(item_service.update_item(req.params.id));
};

module.exports = update_item;
