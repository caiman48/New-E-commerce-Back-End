// Import necessary components from Sequelize library

const { Model, DataTypes } = require('sequelize');
// Import Sequelize connection instance

const sequelize = require('../config/connection.js');
// Define Tag model

class Tag extends Model {}
// Initialize Tag model with column definitions

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false,  // Column cannot be null
      primaryKey: true,  // Column is primary key
      autoIncrement: true, // Column value auto-increments
    },
    // Define 'tag_name' column
    tag_name: {
      type: DataTypes.STRING, // Data type is STRING
    },
    
  },
  {
    //  Use the Sequelize connection instance
    sequelize,  
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
    underscored: true,  // Use snake_case for column names
    modelName: 'tag',  // Set model name to 'tag'
  }
);
// Export Tag model for use in other modules
module.exports = Tag;
