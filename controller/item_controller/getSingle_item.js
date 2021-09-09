const getSingle_item = (req, res, next) => {
  res.send(`show single item ${req.params.id} `);
};

module.exports = getSingle_item;
