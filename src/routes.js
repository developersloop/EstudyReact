const express = require('express');
const routes = express.Router();
const  UserController  = require('./Controllers/UserController');
const ContactController = require('./Controllers/ContactController');
import { validatePayloadLogin } from '../src/validations/userValidation';
import { verifyJWT } from '../src/middlewares/index';

routes.get('/users',verifyJWT,UserController.index);
routes.get('/users/:id',verifyJWT,UserController.show);

routes.get('/contatos',verifyJWT,ContactController.index);
routes.get('/contatos/:id',verifyJWT,ContactController.show);
routes.get('/contatos/user/:id',verifyJWT,ContactController.userByContact);
routes.post('/contatos',verifyJWT,ContactController.store);


// register user

routes.post('/register',UserController.register);
routes.post('/login',
                    validatePayloadLogin(),
                    UserController.login)


module.exports = routes;