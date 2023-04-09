const mongoose = require("mongoose");

const connectWithDb = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>(console.log(`Db connected sucessfully`)))
    .catch((error)=>{
        console.log(`DB connection issues`);
        console.log(error);
    })
}

module.exports = connectWithDb