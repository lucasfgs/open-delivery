const { Model, DataTypes } = require("sequelize");

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        telephone: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Address, { foreignKey: "company_id", as: "address" });
    this.hasMany(models.Product, { foreignKey: "company_id", as: "products" });
  }
}

module.exports = Company;
