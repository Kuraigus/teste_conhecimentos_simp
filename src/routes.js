const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload.config");

const userController = require("./app/controller/user.controller");
const bookController = require("./app/controller/book.controller");

const routes = express.Router();
const upload = multer(uploadConfig);

// rotas de User
routes.post("/users", upload.single("profilePicture"), userController.create);
routes.get("/users", userController.findAll);
routes.get("/users/:userId", userController.findOne);
routes.put("/users/:userId", userController.update);
routes.delete("/users/:userId", userController.delete);
routes.put("/users/:userId/add_book/:bookId", userController.addBook);

//rotas de Book
routes.post("/books", bookController.create);
routes.get("/books", bookController.findAll);
routes.get("/books/:bookId", bookController.findOne);
routes.put("/books/:bookId", bookController.update);
routes.delete("/books/:bookId", bookController.delete);

module.exports = routes;
