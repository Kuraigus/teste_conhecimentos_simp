const Book = require("../model/book.model");

exports.create = async (titulo, autor, editora, edicao) => {
  const book = new Book({
    titulo,
    autor,
    editora,
    edicao,
  });

  return await book.save();
};

exports.findAll = async () => {
  return await Book.find();
};

exports.findOne = async (bookId) => {
  return await Book.findById(bookId);
};

exports.update = async (bookId, titulo, autor, editora, edicao) => {
  return await Book.findByIdAndUpdate(
    bookId,
    {
      titulo,
      autor,
      editora,
      edicao,
    },
    { new: true, omitUndefined: true }
  );
};

exports.delete = async (bookId) => {
  return await Book.findByIdAndRemove(bookId);
};
