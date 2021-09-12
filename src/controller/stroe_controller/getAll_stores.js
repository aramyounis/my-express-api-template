const store_service = require("@/services/stroe_service");

const getAll_stores = (req, res, next) => {
  res.send(store_service.getAll_stores());
};

module.exports = getAll_stores;
