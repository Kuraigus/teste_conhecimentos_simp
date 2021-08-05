const { Router } = require("express");

const { BookController } = require("../app/controller/index.js");

const bookRouter = Router();

bookRouter.post("", BookController.create);
bookRouter.get("", BookController.findAll);
bookRouter.get("/:bookId", BookController.findOne);
bookRouter.put("/:bookId", BookController.update);
bookRouter.delete("/:bookId", BookController.delete);

module.exports = bookRouter;
