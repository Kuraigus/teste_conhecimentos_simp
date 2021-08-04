const userRepository = require("../../repository/userRepository/user.repository");
const cloudinaryRepository = require("../../repository/cloudinaryRepository/cloudinary.repository");
const bookRepository = require("../../repository/bookRepository/book.repository");

exports.create = async (nome, email, senha, path) => {
  const { url } = await cloudinaryRepository.uploadProfilePicture(path);

  const response = await userRepository.create(nome, email, senha, url);

  if (response) return response;

  throw { status: 500, message: "Erro ao criar usuario" };
};

exports.findAll = async () => {
  const response = await userRepository.findAll();

  if (response) return response;

  throw { status: 500, message: "Erro ao listar usuario" };
};

exports.findOne = async (userId) => {
  const response = await userRepository.findOne(userId);

  if (response) return response;

  throw { status: 404, message: "ID de usuario nao encontrado" };
};

exports.update = async (userId, nome, email, senha) => {
  const response = await userRepository.update(userId, nome, email, senha);

  if (response) return response;

  throw { status: 500, message: "Erro ao listar usuario" };
};

exports.delete = async (userId) => {
  const response = await userRepository.delete(userId);

  if (response) return response;

  throw { status: 404, message: "ID de usuario nao encontrado" };
};

exports.addBook = async (userId, bookId) => {
  const checkBook = await bookRepository.findOne(bookId);

  if (!checkBook) throw { status: 404, message: "ID do livro nao encontrado" };

  const response = await userRepository.addBook(userId, bookId);

  if (response) return response;

  throw { status: 500, message: "Erro ao adicionar livro no catalogo do user" };
};
