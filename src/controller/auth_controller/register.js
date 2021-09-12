const auth_service = require("@/services/auth_service");

const register = (req, res) => {
  res.send(auth_service.register());
};

module.exports = register;
