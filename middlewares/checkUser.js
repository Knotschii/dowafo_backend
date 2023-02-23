const User = require("../models/User");

const checkUser = async (req, res, next) => {
  console.log("Checking inside middleware");
  const { email } = req.body;
  try {
    const [user] = await User.find({ email });
    if (user) {
      //   console.log(user);
      return res.send("Email already exists");
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = checkUser;