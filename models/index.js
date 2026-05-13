const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Ahorro = require("./ahorro")(sequelize, Sequelize);
db.Gasto = require("./gasto")(sequelize, Sequelize);
db.Ingreso = require("./ingreso")(sequelize, Sequelize);

module.exports = db;