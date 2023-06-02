const mongoose = require("mongoose");
DB_URL = 'mongodb+srv://gamep3326:NK4nUzwbOD9fwbUb@cluster0.ljcnchn.mongodb.net/test'
const connectWithDb = ()=>{
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