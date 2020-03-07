const userService = require('../service/userService');
const constants = require('../constants');

module.exports.signup = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    userService.signup(req.body).then((data)=>{

        response.status = 201;
        response.message= constants.userMessage.USER_SIGNUP;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {

        response.status = error.status;
        response.message = error.message;
        res.status(400).send(response);
       
    });
    
};

module.exports.login = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    userService.login(req.body).then((data)=>{

        response.status = 200;
        response.message= constants.userMessage.LOGIN_SUCCESS;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {

        response.status = error.status;
        response.message = error.message;
        res.status(400).send(response);
       
    });
    
};