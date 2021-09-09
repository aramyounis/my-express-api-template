const getUser_items = (req, res, next) => {
  res.send(`show ${req.params.username} items`);
};

module.exports = getUser_items;
