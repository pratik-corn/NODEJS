const express = require("express");
const connectDb = require("./database/connection");
const app = express(); //app is now an instance of express
const bcrypt = require("bcrypt");
const dotenv = require("dotenv")
dotenv.config();
connectDb(); //calling the function to connect to database
app.use(express.json()); //for backend to understand json data and later stpore it in a database
const User = require("./models/userModel"); //importing user model to fetch data from user table
//importing blog model to fetch data from blog table
const Blog = require("./models/blogModel");
const { helloWorld, fetchUser, deleteUser, updateBlog, login, registerUser } = require("./controllers/userController");
const { fetchBlog, registerBlog, deleteBlog } = require("./controllers/blogControlleer");

/*app.get("/", function (req, res) {
  // "/" is the home route/api
  // res.send("Hello World!")
  res.json({ message: "Hello World!" }); //sends data in json format
});*/
app.listen(3000, function () {
  //3000 is a port ,function() is a callback function
  console.log("Server has started has at port 3000.");
});
app.get("/about", helloWorld);
app.get("/fetch-user",fetchUser );
app.get("/fetch-blog",fetchBlog );

app.post("/register",registerUser);
app.delete("/delete/:id", async function (req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "User deleted sucessfully!",
  });
});
app.delete("/delete",deleteUser);
// Create and delete blog APIs
app.post("/blogUpload",registerBlog );
app.delete("/deleteBlog",deleteBlog);
app.get("/fetchuser/:id", async function (req, res) {
  const data = await User.findById(req.params.id).select(["-password", "-__v"]); //to not show password
  res.json({
    data: data,
  });
});
app.get("/fetchBlog/:id", async function (req, res) {
  const data = await Blog.findById(req.params.id);
  req.json({
    data: data,
  });
});
app.patch("/updateUser/:id",updateBlog);
app.patch("/updateBlog/:id", async function (req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  await Blog.findByIdAndUpdate(id, {
    title: title,
    subtitle: subtitle,
    description: description,
  });
  res.json({
    message: "Updated BLog",
  });
});
/*Login*/
app.post("/login", login);

