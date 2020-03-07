const joi = require('@hapi/joi');
const constants = require('../constants/index');


const validateObjectSchema = (data,schema)=> {

   return joi.validate(data,schema)
    
    

}


// reusable function we can validate any 
module.exports.validateBody= (schema)=>{

    return (req,res,next)=>{
        validateObjectSchema(req.body,schema).then(result=>{
            if(result){
                next();
            }
        }).catch(error => {
            console.log('The product body is inconsistant to the schma ', error.details);
            res.status = 403;
            res.send({
                error: error.message,
                details: error.details
            });
        });
    }

};

module.exports.validateQueryParams= (schema)=>{

    return (req,res,next)=>{
        validateObjectSchema(req.query,schema).then(result=>{
            if(result){
                next();
            }
        }).catch(error => {
            console.log('The product body is inconsistant to the schma ', error.details);
            res.status = 403;
            res.send({
                error: error.message,
                details: error.details
            });
        });
    }

};

