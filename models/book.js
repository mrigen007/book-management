const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Required"],
    maxLength: [50, "Title length cannot exceed 50 characters"],
  },
  author: {
    type: String,
    required: [true, "Author Required"],
  },
  summary: {
    type: String,
    required: [true, "Summary Required"]
  }
});

module.exports = mongoose.model("Book", BookSchema);
