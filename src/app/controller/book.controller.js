const bookService = require("../services/bookServices/book.service");

exports.create = async (req, res) => {
  const { titulo, autor, editora, edicao } = req.body;

  try {
    const response = await bookService.create(titulo, autor, editora, edicao);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao criar o livro!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const response = await bookService.findAll();

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.findOne = async (req, res) => {
  const { bookId } = req.params;

  try {
    const response = await bookService.findOne(bookId);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.update = async (req, res) => {
  const { titulo, autor, editora, edicao } = req.body;
  const { bookId } = req.params;

  try {
    const response = await bookService.update(
      bookId,
      titulo,
      autor,
      editora,
      edicao
    );

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.delete = async (req, res) => {
  const { bookId } = req.params;

  try {
    const response = await bookService.delete(bookId);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};
