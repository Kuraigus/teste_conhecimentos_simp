const userRepository = require("../../repository/userRepository/user.repository");

exports.create = async (nome, email, senha) => {
  const response = await userRepository.create(nome, email, senha);

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
