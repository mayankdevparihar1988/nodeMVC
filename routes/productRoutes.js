const express = require('express');
const productService = require('../service/productService');
const router = express.Router();
const constants = require('../constants');

router.post('/', (req,res)=>{

    let response = {...constants.defaultServerRespose};
    productService.createProduct(req.body).then((data)=>{

        response.status = 201;
        response.message= constants.productMessage.PRODUCT_CREATED;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {

        response.message = error.message;
        res.send(response);
       
    });
    
});




module.exports= router;