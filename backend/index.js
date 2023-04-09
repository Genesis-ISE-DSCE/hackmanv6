const app = require("./app");

app.listen(process.env.PORT,()=>{console.log(`App is running at port ${process.env.PORT}`)})