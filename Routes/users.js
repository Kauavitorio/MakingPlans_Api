const express = require('express');
const router = express.Router();
const userControler = require('../Controllers/Users');

//  Route to do User Register
router.post('/signUp', userControler.SignUp)

require('../Classes/ConsoleHelper').DisplayClassInicialized(__filename);
module.exports = router