const User = require("../model/user.model");

exports.create = (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha)
    return res.status(400).send({
      message: "Faltando alguma informacao do livro!",
    });

  const user = new User({
    nome,
    email,
    senha,
  });

  user
    .save()
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Algum erro aconteceu ao criar o usuario!",
      });
    });
};

exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      return res.send(users);
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || "Algum erro aconteceu ao recuperar os usuarios!",
      });
    });
};

exports.findOne = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao recuperar o usuario com id: ${userId} nao encontrado!`,
      });
    });
};

exports.update = (req, res) => {
  const { nome, email, senha } = req.body;
  const { userId } = req.params;

  if (!nome && !email && !senha) {
    return res.status(404).send({
      message: "Nenhum parametro foi enviado!",
    });
  }

  User.findByIdAndUpdate(
    userId,
    {
      nome,
      email,
      senha,
    },
    { new: true, omitUndefined: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao atualizar o usuario com id: ${userId}!`,
      });
    });
};

exports.delete = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndRemove(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      res.send({ message: "Usuario deletado com sucesso!!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Usuario com id: ${userId} nao encontrado!`,
        });
      }
      return res.status(500).send({
        message: `erro ao deletar o usuario com id: ${userId}!`,
      });
    });
};
