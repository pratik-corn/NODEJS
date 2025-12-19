const mongoose = require("mongoose")
const schema =mongoose.Schema // Schema is a class in mongoose 
const userSchema = new schema({ //userSchema is an object of schema class(constructor)
name: String,
email: String,   //name , email , password are fields/columns
password: String 
}) //defining structure of document
const User =mongoose.model("user",userSchema)//the name of the table/model is user and const user is the object of model
module.exports=User //exporting the model to be used in other files    

