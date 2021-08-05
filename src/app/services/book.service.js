const { BookRepository } = require("../repository");

exports.create = async (titulo, autor, editora, edicao) => {
  const response = await BookRepository.create(titulo, autor, editora, edicao);

  if (response) return response;

  throw { status: 500, message: "Erro ao criar livro" };
};

exports.findAll = async () => {
  const response = await BookRepository.findAll();

  if (response) return response;

  throw { status: 500, message: "Erro ao listar livro" };
};

exports.findOne = async (bookId) => {
  const response = await BookRepository.findOne(bookId);

  if (response) return response;

  throw { status: 404, message: "ID do livro nao encontrado" };
};

exports.update = async (bookId, titulo, autor, editora, edicao) => {
  const response = await BookRepository.update(
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
  const response = await BookRepository.delete(bookId);

  if (response) return response;

  throw { status: 404, message: "ID do livro nao encontrado" };
};
