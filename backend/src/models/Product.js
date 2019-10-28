const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL
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

module.exports = Product;
