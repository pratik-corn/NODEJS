const  express = require("express")
const app = express()

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
