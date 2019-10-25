const Sequelize = require("Sequelize");
const dbConfig = require("../config/database.js");

const Company = require("../models/Company");
const Address = require("../models/Address");

const connection = new Sequelize(dbConfig);

Company.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;
