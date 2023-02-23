const mongoose = require("mongoose");
require('dotenv').config();
const db = process.env.DATABASE;



const mongoConnection = mongoose.connect(db , {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then( ()=>{
  console.log("Connection succssful");
}).catch((err) =>{
  console.log(err);
});

module.exports = mongoConnection;