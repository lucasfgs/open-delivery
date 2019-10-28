const { Model, DataTypes } = require("sequelize");

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Company;
