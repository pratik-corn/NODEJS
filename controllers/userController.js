const User = require("../models/userModel");
const jwt =require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.helloWorld= function (req, res) {
  // "/" is the home route/api
  res.send("about World!");
}
exports.fetchUser= async function  (req, res) {
  //User vanne table bata data fetch garne ra user ko agadi await hunxa kinaki data fetch garna time lagxa
  const data = await User.find(); //find() le sabai data fetch garxa
  res.json({
    data: data,

  });
}
 exports.registerUser= async function (req, res) {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //const {name,email,password} = req.body  //destructuring
  console.log(name, email, password);
  await User.create({
    name: name, //key:value
    email: email,
    password: bcrypt.hashSync(password, 10), //the key "name" should be the same as filed/column which is defined in userModel.js
  });
  res.json({
      message: "User registered sucessfully!",
});
}
  exports.deleteUser= async function  (req, res) {
  const id = req.body.id;   //ANOTHER METHOD TO EXPORT FUNCTION
  await User.findByIdAndDelete(id);
  res.json({
    message: "User deleted sucessfully!",
  });
}
exports.login=async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const data = await User.findOne({ email: email });
  if (!data) {
    message: "Not registered";
  } else {
    const ismatched = bcrypt.compareSync(password, data.password);
    if (ismatched) {
        const token = jwt.sign({email: data.email},process.env.jwtSecret,{
            expiresIn :"1d"
        })
      res.json({
        message: "logged in",
        token
      });
    } else {
      res.json({
        message: "failed",
      });
    }
  }
}
 exports.updateBlog=async function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  await User.findByIdAndUpdate(id, {
    name: name,
    email: email,
    password: password,
  });
  res.json({
    message: "Updated",
  });
}
//module.exports={helloWorld,fetchUser,registerUser}