const joi = require('@hapi/joi');
module.exports.createUserSchema = joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required()
   
});

