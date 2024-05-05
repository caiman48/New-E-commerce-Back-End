const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    // Find a single category by its `id` and include its associated Products
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If no category is found, return an error
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    // Return the category data if successful
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create a new category
router.post("/", async (req, res) => {
  // create a new category
  try {
    // Create a new category and store it in categoryData
    const categoryData = await Category.create(req.body);
    res.status(201).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Update a category by its `id` value
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ) // Return the updated category data
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
// Delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    // Delete the category where its `id` matches `req.params.id`
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // If no category is found with the given `id`, return an error
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    // Return the deleted category data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Export the router
module.exports = router;
