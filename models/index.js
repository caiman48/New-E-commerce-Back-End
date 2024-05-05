// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id", // Foreign key column in Product table
  onDelete: "CASCADE", // If Category is deleted, delete associated Products
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag, // Intermediate model for many-to-many relationship
    unique: false, // Allow multiple associations between Product and Tag
  },
  foreignKey: "product_id",
  onDelete: "CASCADE",
  as: "product_tags", // Alias for the association
});
// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tag_id",
  onDelete: "CASCADE",
  as: "product_tags", // Alias for the association
});
// Export all models for use in other modules

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
