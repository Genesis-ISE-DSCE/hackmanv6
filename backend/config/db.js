const mongoose = require("mongoose");
const connectWithDb = (process.env.DB_URL)=>{
    mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>(console.log(`Db connected sucessfully`)))
    .catch((error)=>{
        console.log(`DB connection issues`);
        console.log(error);
    })
}

module.exports = connectWithDb