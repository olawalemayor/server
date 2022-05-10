const mysql = require("mysql2");
const config = require("config");

// Create a connection to the database
const connection = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
});

module.exports = connection;
