// Import necessary components from Sequelize library

const { Model, DataTypes } = require('sequelize');
// Import Sequelize connection instance

const sequelize = require('../config/connection.js');
// Define Category model

class Category extends Model {}
// Initialize Category model with column definitions

Category.init(
    // define columns
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// Export Category model for use in other modules

module.exports = Category;
