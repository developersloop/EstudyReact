const express = require('express');
const routes = express.Router();
const  UserController  = require('./Controllers/UserController');
const ContactController = require('./Controllers/ContactController');

routes.get('/users',UserController.index);
routes.get('/users/:id',UserController.show);
routes.post('/users',UserController.store);

routes.get('/contatos',ContactController.index);
routes.get('/contatos/:id',ContactController.show);
routes.get('/contatos/user/:id',ContactController.userByContact);
routes.post('/contatos',ContactController.store);

module.exports = routes;