const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nombre_db", "usuario", "password", {
  host: "localhost",
  dialect: "mssql", // SQL Server
});

module.exports = sequelize;