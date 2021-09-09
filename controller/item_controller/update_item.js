const update_item = (req, res, next) => {
  res.send(`update item ${req.params.id}`);
};

module.exports = update_item;
