const store_service = require("@/services/stroe_service");

const getStore_items = (req, res, next) => {
  res.send(store_service.getStore_items(req.params.store));
};

module.exports = getStore_items;
