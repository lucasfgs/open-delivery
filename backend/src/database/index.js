const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Company = require("../models/Company");
const Address = require("../models/Address");
const Product = require("../models/Product");
const Customer = require("../models/Customer");

const connection = new Sequelize(dbConfig);

Company.init(connection);
Address.init(connection);
Product.init(connection);
Customer.init(connection);

Company.associate(connection.models);
Address.associate(connection.models);
Product.associate(connection.models);
Customer.associate(connection.models);

console.log(connection.models);

module.exports = connection;
