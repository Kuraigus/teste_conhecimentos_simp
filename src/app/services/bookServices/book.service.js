const bookRepository = require("../../repository/bookRepository/book.repository");

exports.create = async (titulo, autor, editora, edicao) => {
  const response = await bookRepository.create(titulo, autor, editora, edicao);

  if (response) return response;

  throw { status: 500, message: "Erro ao criar livro" };
};

exports.findAll = async () => {
  const response = await bookRepository.findAll();

  if (response) return response;

  throw { status: 500, message: "Erro ao listar livro" };
};

exports.findOne = async (bookId) => {
  const response = await bookRepository.findOne(bookId);

  if (response) return response;

  throw { status: 404, message: "ID do livro nao encontrado" };
};

exports.update = async (bookId, titulo, autor, editora, edicao) => {
  const response = await bookRepository.update(
    bookId,
    titulo,
    autor,
    editora,
    edicao
  );

  if (response) return response;

  throw { status: 500, message: "Erro ao atualizar o livro" };
};

exports.delete = async (bookId) => {
  const response = await bookRepository.delete(bookId);

  if (response) return response;

  throw { status: 404, message: "ID do livro nao encontrado" };
};
