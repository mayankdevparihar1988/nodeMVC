const mongoose = require('mongoose');

module.exports = async()=>{
    
    try{
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
        console.log('the database connected!');
    }catch(error){

        console.log("Error in database connection",error);

        throw new Error(error);
    }
   
}