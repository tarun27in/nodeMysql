const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequ = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequ = sequ;

db.tutorials = require("./tutorial.model.js")(sequ, Sequelize);

module.exports = db;
