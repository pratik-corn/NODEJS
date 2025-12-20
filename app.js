const express = require("express")
const connectDb = require("./database/connection")
const app = express()//app is now an instance of express
const bcrypt = require("bcrypt")
connectDb() //calling the function to connect to database
app.use(express.json()) //for backend to understand json data and later stpore it in a database
const User = require("./models/userModel") //importing user model to fetch data from user table
//importing blog model to fetch data from blog table
const Blog = require("./models/blogModel")
app.get("/", function (req, res) {   // "/" is the home route/api
    // res.send("Hello World!")
    res.json({ message: "Hello World!" })//sends data in json format
})
app.listen(3000, function () {   //3000 is a port ,function() is a callback function
    console.log("Server has started has at port 3000.")

})
app.get("/about", function (req, res) {   // "/" is the home route/api
    res.send("about World!")
})
app.get("/fetch-user", async function (req, res) {
    //User vanne table bata data fetch garne ra user ko agadi await hunxa kinaki data fetch garna time lagxa
    const data = await User.find() //find() le sabai data fetch garxa
    res.json({
        data: data
    })
})
app.get("/fetch-blog", async function (req, res) {
    //Blog vanne table bata data fetch garne ra blog ko agadi await hunxa kinaki data fetch garna time lagxa
    const data = await Blog.find() //find() le sabai data fetch garxa   
    res.json({
        data: data
    })
})

app.post("/register", async function (req, res) {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    //const {name,email,password} = req.body  //destructuring
    console.log(name, email, password)
    await User.create({
        name: name, //key:value
        email: email,
        password: bcrypt.hashSync(password, 10) //the key "name" should be the same as filed/column which is defined in userModel.js

    })
    res.json({
        message: "User registered sucessfully!"
    })
})
app.delete("/delete/:id", async function (req, res) {
    const id = req.params.id
    await User.findByIdAndDelete(id)
    res.json({
        message: "User deleted sucessfully!"
    })
})
app.delete("/delete", async function (req, res) {
    const id = req.body.id
    await User.findByIdAndDelete(id)
    res.json({
        message: "User deleted sucessfully!"
    })
})
// Create and delete blog APIs 
app.post("/blogUpload", async function (req, res) {
    //console.log(req.body)
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description
    //console.log(title, subtitle, description)

    await Blog.create({
        title: title,
        subtitle: subtitle,
        description: description
    })
    res.json({
        message: "Created sucessfully!"
    })

})
app.delete("/deleteBlog", async function(req,res){
    const id = req.body.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message: "Id delted sucessfully",
    }
        
    )
})

