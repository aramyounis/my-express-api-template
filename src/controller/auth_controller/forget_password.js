const auth_service = require("../../services/auth_service");

const forget = (req, res) => {
  res.send(auth_service.forget_password());
};

module.exports = forget;
