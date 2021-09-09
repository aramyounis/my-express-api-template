const getStore_items = (req, res, next) => {
  res.send(`show ${req.params.store} items`);
};

module.exports = getStore_items;
