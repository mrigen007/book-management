const Book = require("../models/book");

const getAllBook = async (req, res) => {
  try {
    const book = await Book.find(req.body);
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
      return res.status(404).json({ msg: `No book with Id: ${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOneAndUpdate({ _id: bookId }, req.body);
    if (!book) {
      return res.status(404).json({ msg: `No book with Id: ${bookId}` });
    }
    res.status(200).json({ book, msg: `Updated successfully` });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOneAndDelete({ _id: bookId });
    if (!book) {
      return res.status(404).json({ msg: `No book with Id: ${bookId}` });
    }
    res.status(200).json({ book, msg: `Deleted successfully`, delete: "true" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllBook,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
