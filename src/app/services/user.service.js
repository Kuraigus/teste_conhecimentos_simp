const {
  BookRepository,
  CloudinaryRepository,
  UserRepository,
} = require("../repository/");

exports.create = async (nome, email, senha, path) => {
  const { url } = await CloudinaryRepository.uploadProfilePicture(path);

  const response = await UserRepository.create(nome, email, senha, url);

  if (response) return response;

  throw { status: 500, message: "Erro ao criar usuario" };
};

exports.findAll = async () => {
  const response = await UserRepository.findAll();

  if (response) return response;

  throw { status: 500, message: "Erro ao listar usuario" };
};

exports.findOne = async (userId) => {
  const response = await UserRepository.findOne(userId);

  if (response) return response;

  throw { status: 404, message: "ID de usuario nao encontrado" };
};

exports.update = async (userId, nome, email, senha) => {
  const response = await UserRepository.update(userId, nome, email, senha);

  if (response) return response;

  throw { status: 500, message: "Erro ao listar usuario" };
};

exports.delete = async (userId) => {
  const response = await UserRepository.delete(userId);

  if (response) return response;

  throw { status: 404, message: "ID de usuario nao encontrado" };
};

exports.addBook = async (userId, bookId) => {
  const checkBook = await BookRepository.findOne(bookId);

  if (!checkBook) throw { status: 404, message: "ID do livro nao encontrado" };

  const response = await UserRepository.addBook(userId, bookId);

  if (response) return response;

  throw { status: 500, message: "Erro ao adicionar livro no catalogo do user" };
};
