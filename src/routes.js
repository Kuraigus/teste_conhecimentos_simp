const { Router } = require("express");

const { userRouter, bookRouter } = require("./routes/");

const routes = Router();

// rotas de User
routes.use("/users", userRouter);

//rotas de Book
routes.use("/books", bookRouter);

module.exports = routes;
