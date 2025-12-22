const Blog = require("../models/blogModel");
//const User = require("../models/userModel");

exports.fetchBlog=async function(req, res) {
  //Blog vanne table bata data fetch garne ra blog ko agadi await hunxa kinaki data fetch garna time lagxa
  const data = await Blog.find(); //find() le sabai data fetch garxa
  res.json({
    data: data,
  });
}
exports.registerBlog=async function  (req, res) {
  //console.log(req.body)
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  
  //console.log(title, subtitle, description)
  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });
  res.json({
    message: "Created sucessfully!",
  });
}
 exports.deleteBlog= async function  (req, res) {
  const id = req.body.id;
  await Blog.findByIdAndDelete(id);
  res.json({
    message: "Id delted sucessfully",
  });
}
