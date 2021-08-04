const User = require("../../model/user.model");

exports.create = async (nome, email, senha) => {
  const user = new User({
    nome,
    email,
    senha,
  });

  return await user.save();
};

exports.findAll = async () => {
  return await User.find();
};

exports.findOne = async (userId) => {
  return await User.findById(userId);
};

exports.update = async (userId, nome, email, senha) => {
  return await User.findByIdAndUpdate(
    userId,
    {
      nome,
      email,
      senha,
    },
    { new: true, omitUndefined: true }
  );
};

exports.delete = async (userId) => {
  return await User.findByIdAndRemove(userId);
};
