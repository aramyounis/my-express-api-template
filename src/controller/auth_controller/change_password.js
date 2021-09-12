const auth_service = require("@/services/auth_service");

const change = (req, res) => {
  res.send(auth_service.change_password());
};

module.exports = change;
