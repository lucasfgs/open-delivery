const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        district: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: "company_id", as: "company" });
  }
}

module.exports = Address;
