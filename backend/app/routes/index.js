const express = require('express');
const routes = express.Router();
const UserController = require('./../controllers/User.controller');
const ChatController = require('./../controllers/Chat.controller');
const AuthMiddleware = require('../middlewares/Auth.middleware');

routes.get('/', (req, res, next)=>{
    res.json('Welcome to Nodejs app');
})

routes.post('/login', UserController.login);
routes.post('/signup', UserController.signup);

routes.get('/get-users', AuthMiddleware, UserController.getUsers);
routes.post('/send-message', AuthMiddleware, ChatController.sendMessage);
routes.post('/get-chat-by-users', AuthMiddleware, ChatController.getChatByUsers);

module.exports = routes