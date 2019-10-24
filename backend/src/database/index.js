const Sequelize = require("Sequelize");
const dbConfig = require("../config/database.js");

const Company = require("../models/Company");

const connection = new Sequelize(dbConfig);

Company.init(connection);

module.exports = connection;
