const productService = require('../service/productService');
const constants = require('../constants');

module.exports.createProduct = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    productService.createProduct(req.body).then((data)=>{

        response.status = 201;
        response.message= constants.productMessage.PRODUCT_CREATED;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {

        response.status = error.status;
        response.message = error.message;
        rres.status(400).send(response);
       
    });
    
};

module.exports.getAllProduts = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    
    productService.getAllProducts(req.query).then((data)=>{

        response.status = 200;
        response.message= constants.productMessage.PRODUCT_FATCHED;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {

        response.status = error.status;
        response.message = error.message;
        res.status(400).send(response);
       
    });
    
};

module.exports.getProductById = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    
    productService.getProductById(req.params).then((data)=>{

        response.status = 200;
        response.message= constants.productMessage.PRODUCT_FATCHED;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {
        response.status = 400;
        response.message = error.message;
        
        res.status(400).send(response);
       
    });
    
};

module.exports.updateProduct = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    
    productService.updateProduct( {id: req.params.id, updateInfo: req.body}).then((data)=>{

        response.status = 200;
        response.message= constants.productMessage.PRODUCT_UPDATED;
        response.body= data;
        res.status(200).send(response);


    }).catch((error)=> {
        response.status = 400;
        response.message = error.message;
        
        res.status(400).send(response);
       
    });
    
};


module.exports.deleteProductById = (req,res)=>{

    let response = {...constants.defaultServerRespose};
    
    productService.deleteProductById(req.params).then((data)=>{

        response.status = 200;
        response.message= constants.productMessage.PRODUCT_DELETED;
        response.body= data;
        res.status(201).send(response);


    }).catch((error)=> {
        response.status = 400;
        response.message = error.message;
        
        res.status(400).send(response);
       
    });
    
};