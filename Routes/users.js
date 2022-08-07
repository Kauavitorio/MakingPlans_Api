const express = require('express');
const router = express.Router();
const userControler = require('../Controllers/Users');

//  Route to do User Register
router.post('/signUp', userControler.SignUp)

//  Route to do User Register
router.get('/test/test', userControler.SignUp)

require('../Classes/ConsoleHelper').DisplayClassInicialized(__filename);
module.exports = router