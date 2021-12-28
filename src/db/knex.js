require("module-alias/register");
const config = require("@/config");
const config_knex = require("@root/knexfile.js")[config.NODE_ENV];
const knex = require("knex");
const connection = knex(config_knex);

module.exports = connection;
