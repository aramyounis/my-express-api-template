const user_service = require("@/services/user_service");

const getUser_items = (req, res, next) => {
  res.send(user_service.getUser_items(req.params.username));
};

module.exports = getUser_items;
