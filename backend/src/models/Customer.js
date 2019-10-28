const { Model, DataTypes } = require("sequelize");

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      foreignKey: "customer_id",
      through: "customer_products",
      as: "products"
    });
  }
}

module.exports = Customer;
