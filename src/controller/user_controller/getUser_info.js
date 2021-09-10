const user_service = require("../../services/user_service");

const getUser_info = (req, res, next) => {
  res.send(user_service.getUser_info(req.params.username));
};

module.exports = getUser_info;
