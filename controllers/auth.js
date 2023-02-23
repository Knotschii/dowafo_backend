const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(201).send("User has been added. Please log in now.");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
 
  const { password } = req.body;

  const user = req.user;
  console.log("Daten aus DB dank Middleware", user);
  console.log("Daten aus Clientseitigem Formular", req.body);
  try {
    
    const validPass = await bcrypt.compare(password, user.password);
    console.log("ist user.password = hashedPassword?", validPass);
    if (validPass) {
      
      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
      console.log("token", token);
      return res.status(200).send(token);
    }
    return res.status(404).send("Invalid password!");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { signUp, login };
