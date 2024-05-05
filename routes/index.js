// Import Express Router

const router = require('express').Router();
// Import API routes

const apiRoutes = require('./api');
// Middleware to handle requests starting with '/api'

router.use('/api', apiRoutes);
// Middleware to handle requests for routes not defined

router.use((req, res) => {
    // Send a HTML response indicating that the route is incorrect

  res.send("<h1>Wrong Route!</h1>")
});
// Export the router with defined routes

module.exports = router;