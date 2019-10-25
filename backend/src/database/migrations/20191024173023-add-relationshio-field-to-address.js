"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("addresses", "company_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "companies", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("addresses", "company_id");
  }
};
