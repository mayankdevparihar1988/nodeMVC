
const defaultServerRespose = require('../constants').defaultServerRespose;
const tokenMissing = require('../constants/index').requestValidationMessage.TOKEN_MISSING;
const jwt = require('jsonwebtoken');
module.exports.validateToken = (req,res,next) => {

    let response = defaultServerRespose;
    console.log(req.headers.authorization.split(' ')[1]); 
     if(!req.headers.authorization){
         throw new Error(tokenMissing);
     }

     const token = req.headers.authorization.split(' ')[1];
 
     const decode = jwt.verify(token,process.env.SECRET_KEY || 'my-secret-key');

     console.log('decoded!!');
     return next();


}