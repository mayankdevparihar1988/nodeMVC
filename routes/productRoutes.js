const express = require('express');
const productService = require('../service/productService');
const router = express.Router();

router.post('/', (req,res)=>{
    productService.createProduct(req.body).then((data)=>{

        res.status(201).send(`Product created Successfully!! data == ${data}`);


    }).catch((error)=> {

         console.log('error -- ', error);

        throw new Error(error); 
    });
    
});




module.exports= router;