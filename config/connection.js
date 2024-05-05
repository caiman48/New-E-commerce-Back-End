// Load environment variables from .env file into process.env

require("dotenv").config();
// Import Sequelize library

const Sequelize = require("sequelize");
// Initialize Sequelize instance

const sequelize = process.env.JAWSDB_URL
  ? // If JAWSDB_URL environment variable is present
    // connect to the specified database URL
    new Sequelize(process.env.JAWSDB_URL)
  : // If JAWSDB_URL is not present, connect to a local MySQL database using
    // environment variables for database name, user, and password
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers
      },
    });
// Export the initialized Sequelize instance for use in other modules

module.exports = sequelize;
