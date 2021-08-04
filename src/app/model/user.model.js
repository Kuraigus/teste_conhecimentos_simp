const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
