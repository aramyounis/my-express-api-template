const auth_service = require("@/services/auth_service");

const refreshToken = (req, res) => {
  res.send(auth_service.refreshToken());
};

module.exports = refreshToken;
