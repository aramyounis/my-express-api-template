// Update with your config settings.
require("module-alias/register");
const config = require("@/config");
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: config.DB_HOST,
      database: config.DB_NAME,
      user: config.DB_USER,
      password: config.DB_PASS,
    },

    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
