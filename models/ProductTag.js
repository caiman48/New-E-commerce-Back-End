// Import necessary components from Sequelize library

const { Model, DataTypes } = require("sequelize");
// Import Sequelize connection instance

const sequelize = require("../config/connection");

// Define ProductTag model

class ProductTag extends Model {}
// Initialize ProductTag model with column definitions

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Column cannot be null
      primaryKey: true, // Column is primary key
      autoIncrement: true, // Column value auto-increments
    },
    // Define 'product_id' column

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product", // References 'id' column of 'product' table
        key: "id",
      },
    },
    // Define 'tag_id' column
    tag_id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: {
        model: "tag", // References 'id' column of 'tag' table
        key: "id",
      },
    },
  },
  {
    sequelize, // Use the Sequelize connection instance
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
    underscored: true, // Use snake_case for column names
    modelName: "product_tag", // Set model name to 'product_tag'
  }
);
// Export ProductTag model for use in other modules

module.exports = ProductTag;
