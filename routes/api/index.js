// Import Express Router
// Import routes for categories, products, and tags

const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");
// Middleware to handle routes related to categories

router.use("/categories", categoryRoutes);
// Middleware to handle routes related to products

router.use("/products", productRoutes);
// Middleware to handle routes related to tags

router.use("/tags", tagRoutes);
// Export the router with all defined routes

module.exports = router;
