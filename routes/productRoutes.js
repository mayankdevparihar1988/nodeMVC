const express = require('express');
const router = express.Router();
const constants = require('../constants');
const joiSchmaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const productController= require('../controller/productController');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/', tokenValidation.validateToken,joiSchmaValidation.validateBody(productSchema.createProductSchema),productController.createProduct);


router.get('/:id',tokenValidation.validateToken,productController.getProductById);

router.put('/:id',tokenValidation.validateToken,joiSchmaValidation.validateBody(productSchema.updateProductSchema),productController.updateProduct);

router.get('/',tokenValidation.validateToken,joiSchmaValidation.validateQueryParams(productSchema.getAllProductSchema),productController.getAllProduts);

router.delete('/:id', tokenValidation.validateToken,productController.deleteProductById);

module.exports= router;