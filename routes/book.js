const express = require("express");
const router = express.Router();
const {
  getAllBook,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/book");

router.route("/").get(getAllBook).post(createBook);
router.route("/:id").get(getSingleBook).patch(updateBook).delete(deleteBook);

module.exports = router;
