const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/connection');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

// to read the config
dotEnv.config();
const app = express();
// to enable cors
app.use(cors());

// database connectivity 

dbConnection();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/product',productRoutes);
app.use('/api/v1/user',userRoutes);


// API Documentation 
if(process.env.NODE_ENV != 'production'){

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

}




app.use(function(err,req,res,next){

   // console.log(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
})

app.listen(PORT,()=>{
    console.log(`App is listening on port : ${PORT}`);
})