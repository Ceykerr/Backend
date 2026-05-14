//const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";

const DB_NAME = "yayi_db";
const USER_PASSWORD = "Y4y1undostrescuatro?";
const USER_NAME = "yayi";
const PORT = 1433;

const sequelize = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
  dialect: "mssql",
  server: "localhost",
  port: PORT,
  database: process.env.DB_NAME,
  host: "localhost",
});

export default sequelize;
