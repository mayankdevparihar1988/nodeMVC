const express = require('express');
const router = express.Router();
const constants = require('../constants');
const joiSchmaValidation = require('../middleware/joiSchemaValidation');
const userSignupSchema = require('../apiSchema/userSchema').createUserSchema;

const userController= require('../controller/userController');

router.post('/signup', joiSchmaValidation.validateBody(userSignupSchema) ,userController.signup);
router.post('/login', joiSchmaValidation.validateBody(userSignupSchema), userController.login)

module.exports= router;