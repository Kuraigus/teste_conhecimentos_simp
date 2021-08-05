const userService = require("../services/user.service");

module.exports = {
  async create(req, res) {
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
  },

  async findAll(req, res) {
    try {
      const response = await userService.findAll();

      return res.send(response);
    } catch (err) {
      return res.status(err.status || 500).send({
        message: err.message || "Algum erro aconteceu ao listar os livros!",
      });
    }
  },

  async findOne(req, res) {
    const { userId } = req.params;

    try {
      const response = await userService.findOne(userId);

      return res.send(response);
    } catch (err) {
      return res.status(err.status || 500).send({
        message: err.message || "Algum erro aconteceu ao listar os livros!",
      });
    }
  },

  async update(req, res) {
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
  },

  async delete(req, res) {
    const { userId } = req.params;

    try {
      const response = await userService.delete(userId);

      return res.send(response);
    } catch (err) {
      return res.status(err.status || 500).send({
        message: err.message || "Algum erro aconteceu ao listar os livros!",
      });
    }
  },

  async addBook(req, res) {
    const { userId, bookId } = req.params;

    try {
      let response = await userService.addBook(userId, bookId);

      return res.send(response);
    } catch (err) {
      return res.status(err.status || 500).send({
        message: err.message || "Algum erro aconteceu ao listar os livros!",
      });
    }
  }
}
