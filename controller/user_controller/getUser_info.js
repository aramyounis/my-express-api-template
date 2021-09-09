const getUser_info = (req, res, next) => {
  res.send(`show ${req.params.username} information`);
};

module.exports = getUser_info;
