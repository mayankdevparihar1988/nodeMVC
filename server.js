const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/connection');
const productRoutes = require('./routes/productRoutes');

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

app.get('/',(req,res,next)=>{

    res.send(`Hello from the node server `);

})

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