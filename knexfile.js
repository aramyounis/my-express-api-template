// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "api_db",
      user: "postgres",
      password: "1081995",
    },

    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
