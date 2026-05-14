//const Sequelize = require("sequelize");
//const sequelize = require("../config/database");
import Sequelize from "sequelize";
import sequelize from "../config/database.js";

import Ahorro from "./ahorro.js";
import Gasto from "./gasto.js";
import Ingreso from "./ingreso.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.Ahorro = require("./ahorro")(sequelize, Sequelize);
//db.Gasto = require("./gasto")(sequelize, Sequelize);
//db.Ingreso = require("./ingreso")(sequelize, Sequelize);

db.Ahorro = Ahorro;
db.Gasto = Gasto;
db.Ingreso = Ingreso;

export default db;
