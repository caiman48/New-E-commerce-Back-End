// Import Express framework
const express = require("express");
// Import routes

const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

// Create an Express application

const app = express();
// Set the port for the application
const PORT = process.env.PORT || 3001;
// Middleware to parse JSON and urlencoded request data
app.use(express.json());
// Middleware to parse JSON and urlencoded request data
app.use(express.urlencoded({ extended: true }));
// Middleware to use the routes defined in the routes directory
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize
  .sync({ force: false })
  .then(() => {
    // Start the server and listen on the defined port

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    // Log an error if there is an issue with the database connection
    console.error("Unable to connect to the database:", error);
  });
