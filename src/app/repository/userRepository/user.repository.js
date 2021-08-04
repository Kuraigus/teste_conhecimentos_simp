const User = require("../../model/user.model");

exports.create = async (nome, email, senha, profilePicture) => {
  let catalogo;

  const user = new User({
    nome,
    email,
    senha,
    profilePicture,
    catalogo,
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

exports.addBook = async (userId, bookId) => {
  return User.findByIdAndUpdate(
    userId,
    { $push: { catalogo: bookId } },
    { new: true, upsert: true }
  );
};
