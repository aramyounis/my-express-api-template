const getStore_info = (req, res, next) => {
  res.send(`show ${req.params.store} store`);
};

module.exports = getStore_info;
