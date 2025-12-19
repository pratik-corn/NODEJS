const  express = require("express")
const connectDb = require("./database/connection")
const app = express()//app is now an instance of express
connectDb() //calling the function to connect to database
const User = require ("./models/userModel") //importing user model to fetch data from user table
const blog = require("./blogModel") //importing blog model to fetch data from blog table
app.get("/",function(req,res) {   // "/" is the home route/api
   // res.send("Hello World!")
   res.json({ message: "Hello World!"})//sends data in json format
})
app.listen(3000,function() {   //3000 is a port ,function() is a callback function
    console.log("Server has started has at port 3000.")

})
app.get("/about",function(req,res) {   // "/" is the home route/api
    res.send("about World!")
})
app.get("/fetch-user",async function(req,res){
    //User vanne table bata data fetch garne ra user ko agadi await hunxa kinaki data fetch garna time lagxa
const data = await User.find() //find() le sabai data fetch garxa
res.json({
    data:data
})
})
app.get("/fetch-blog",async function(req,res){
    //Blog vanne table bata data fetch garne ra blog ko agadi await hunxa kinaki data fetch garna time lagxa
const data = await blog.find() //find() le sabai data fetch garxa   
res.json({
    data:data
})
})


