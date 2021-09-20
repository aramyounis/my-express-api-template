require("module-alias/register");

const config_knex = require("@root/knexfile.js")["development"];
const knex = require("knex");
const connection = knex(config_knex);

module.exports = connection;
