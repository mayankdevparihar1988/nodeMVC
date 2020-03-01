const productModel= require('../db/models/productModel');

module.exports.createProduct =  (serviceBody)=>{


    console.log('Request body retrieve in product service is == ', serviceBody);

    let product = new productModel({...serviceBody});

    return new Promise( (resolve, reject)=> {

        product.save().then((data)=>{
            console.log('Created Product is ',data);
            return resolve(data);
    
        }).catch((error)=>{
            console.log('Something is wrong in the product service .. ',error);
             return reject(new Error(error)) ;
        });



    });
}