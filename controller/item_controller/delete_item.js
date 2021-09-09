const delete_item = (req, res, next) => {
  res.send(`delete item ${req.params.id}`);
};

module.exports = delete_item;
