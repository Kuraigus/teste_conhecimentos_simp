const mongoose = require("mongoose");
const { validateEmail } = require("../utils/");

const UserSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validateEmail,
        message: "Email nao valido",
      },
    },
    senha: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    catalogo: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
