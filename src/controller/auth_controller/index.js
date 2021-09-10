const login = require("./login.js");
const register = require("./register.js");
const refreshToken = require("./refreshToken");
const logout = require("./logout");
const change_password = require("./change_password");
const forget_password = require("./forget_password");
module.exports = {
  login,
  register,
  refreshToken,
  logout,
  change_password,
  forget_password,
};
