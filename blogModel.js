const mongoose=require("mongoose")
const schema = mongoose.Schema
const blog =new schema({
    title: String,
    subtitle: String,
    description: String
})
const Blog = mongoose.model("blog",blog)
module.exports=Blog