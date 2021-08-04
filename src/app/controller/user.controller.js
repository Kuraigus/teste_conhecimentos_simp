const userService = require("../services/userServices/user.service");

exports.create = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { path } = req.file;

  try {
    const response = await userService.create(nome, email, senha, path);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const response = await userService.findAll();

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.findOne = async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await userService.findOne(userId);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.update = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { userId } = req.params;

  try {
    const response = await userService.update(userId, nome, email, senha);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};

exports.delete = async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await userService.delete(userId);

    return res.send(response);
  } catch (err) {
    return res.status(err.status || 500).send({
      message: err.message || "Algum erro aconteceu ao listar os livros!",
    });
  }
};
