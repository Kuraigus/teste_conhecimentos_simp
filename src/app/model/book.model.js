const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    editora: {
      type: String,
      required: true,
    },
    edicao: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
