const router = require("express").Router();

const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // Find all tags and include associated Product data
    const tagData = await Tag.findAll({
      // Include associated Product data
      include: [{ model: Product, through: ProductTag, as: "product_tags" }],
    });
    // If no tags are found, return an error
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // Find a single tag by its `id` and include associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      // Include associated Product data
      include: [{ model: Product, through: ProductTag, as: "product_tags" }],
    });
    // If no tag is found, return an error
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create a new tag
router.post("/", async (req, res) => {
  try {
    // Create a new tag and store it in tagData
    const tagData = await Tag.create(req.body);
    // If the tag is successfully created, return the new tag
    res.status(201).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value

  tag
    .update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    // If no tag is found with the given `id`, return an error
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    // Return the deleted tag data
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Export the router
module.exports = router;
