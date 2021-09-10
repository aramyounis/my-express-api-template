const auth_service = require("../../services/auth_service");

const logout = (req, res) => {
  res.send(auth_service.logout());
};

module.exports = logout;
