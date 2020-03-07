const productModel = require('../db/models/productModel');
const formatMongoData = require('../helper/dbhelper').formatMongoData;
const checkObjectId = require('../helper/dbhelper').checkObjectId;
const constants = require('../constants/index');
const mongoose = require('mongoose');

module.exports.createProduct = (serviceBody) => {


    console.log('Request body retrieve in product service is == ', serviceBody);

    let product = new productModel({ ...serviceBody });

    return new Promise((resolve, reject) => {

        product.save().then((data) => {
            console.log('Created Product is ', data);

            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });


    });
};


module.exports.getAllProducts = ({ skip = 0, limit = 10 }) => {


    console.log('Inside getProducts in product service ');

    // let product = new productModel();

    return new Promise((resolve, reject) => {

        productModel.find({}).skip(parseInt(skip)).limit(parseInt(limit)).then((data) => {
            console.log('Found Products are ', data);
            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });



    });
};


module.exports.getProductById = ({ id }) => {


    console.log('Inside getProductById in product service  ID retrieved is ', id);

    // this check is shifted to the helper (dbHandler)
    /*
    if (! mongoose.Types.ObjectId.isValid(id)) {
        console.log('Inside getProductById in product service ');
        throw new Error(constants.databaseMessage.INVALID_ID);
    }*/
    checkObjectId(id);

    return new Promise((resolve, reject) => {
        // let product = new productModel();

        productModel.findById(id).then((data) => {
            if (!data) {
                console.log('The product not found !!');
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
            }
            console.log('Found Product is ', data);
            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });



    });
};



module.exports.updateProduct = ({ id, updateInfo }) => {


    
    console.log('The retrieved Id is ', id);
    // check if the id is valid or not 
    checkObjectId(id);

   
    return new Promise((resolve, reject) => {

        productModel.findOneAndUpdate({_id: id},updateInfo,{new: true}).then((data) => {
            console.log('Created Product is ', data);

            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });


    });
};


module.exports.deleteProductById = ({ id }) => {


    console.log('Inside getProductById in product service  ID retrieved is ', id);

    // this check is shifted to the helper (dbHandler)
    /*
    if (! mongoose.Types.ObjectId.isValid(id)) {
        console.log('Inside getProductById in product service ');
        throw new Error(constants.databaseMessage.INVALID_ID);
    }*/
    checkObjectId(id);

    return new Promise((resolve, reject) => {
        // let product = new productModel();

        productModel.findByIdAndDelete(id).then((data) => {
            if (!data) {
                console.log('The product not found !!');
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
            }
            console.log('Found Product is ', data);
            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });



    });
};