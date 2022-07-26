const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/userController')

//  Route to do User Register
router.post('/signUp', UsersController.SignUp)

module.exports = router
require('../Classes/ConsoleHelper').DisplayClassInicialized(__filename);