const mongoose=require("mongoose")
async function connectDb(){
   await mongoose.connect(process.env.CONNECTION_STRING)//now our connection string is safe in .env
    console.log("Database connected successfully")
    //this itself is not useful it has to be called from app.js beacuse app.js is the main file using
    //module.exports


}
module.exports=connectDb