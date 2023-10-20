const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/users',usersController.userController.getAllUsers );
router.get('/users/:id',usersController.userController.getUsersById );
router.post('/users',usersController.userController.createUsers );
router.put('/users/:id',usersController.userController.createUsers );
router.delete('/users/:id',usersController.userController.deleteUsers);

module.exports= router;