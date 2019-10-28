const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Company = require("../models/Company");
const Address = require("../models/Address");

const connection = new Sequelize(dbConfig);

Company.init(connection);
Address.init(connection);

Address.associate(connection.models);

console.log(connection.models);

module.exports = connection;
