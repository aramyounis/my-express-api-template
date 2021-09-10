const store_service = require("../../services/stroe_service");

const getStore_info = (req, res, next) => {
  res.send(store_service.getStore_info(req.params.store));
};

module.exports = getStore_info;
