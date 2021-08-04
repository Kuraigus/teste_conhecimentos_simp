const Book = require("../model/book.model");

exports.create = (req, res) => {
  const { titulo, autor, editora, edicao } = req.body;

  if (!titulo || !autor || !editora || !edicao)
    return res.status(400).send({
      message: "Faltando alguma informacao do livro!",
    });

  const book = new Book({
    titulo,
    autor,
    editora,
    edicao,
  });

  book
    .save()
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Algum erro aconteceu ao criar o livro!",
      });
    });
};

exports.findAll = (req, res) => {
  Book.find()
    .then((books) => {
      return res.send(books);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Algum erro aconteceu ao recuperar os livros!",
      });
    });
};

exports.findOne = (req, res) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao recuperar o livro com id: ${bookId} nao encontrado!`,
      });
    });
};

exports.update = (req, res) => {
  const { titulo, autor, editora, edicao } = req.body;
  const { bookId } = req.params;

  if (!titulo && !autor && !editora && !edicao) {
    return res.status(404).send({
      message: "Nenhum parametro foi enviado!",
    });
  }

  Book.findByIdAndUpdate(
    bookId,
    {
      titulo,
      autor,
      editora,
      edicao,
    },
    { new: true, omitUndefined: true }
  )
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao atualizar o livro com id: ${bookId}!`,
      });
    });
};

exports.delete = (req, res) => {
  const { bookId } = req.params;

  Book.findByIdAndRemove(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      res.send({ message: "Livro deletado com sucesso!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Livro com id: ${bookId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao deletar o livro com id: ${bookId}!`,
      });
    });
};
