const express = require('express');

const userController = require('./app/controller/userController');
const bookController = require('./app/controller/bookController');

const routes = express.Router();

// rotas de User
routes.post('/users', userController.create);
routes.get('/users', userController.findAll);
routes.get('/users/:userId', userController.findOne);
routes.put('/users/:userId', userController.update);
routes.delete('/users/:userId', userController.delete);


//rotas de Book
routes.post('/books', bookController.create);
routes.get('/books', bookController.findAll);
routes.get('/books/:bookId', bookController.findOne);
routes.put('/books/:bookId', bookController.update);
routes.delete('/books/:bookId', bookController.delete);

module.exports = routes;