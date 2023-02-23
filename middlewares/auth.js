const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { authtoken } = req.headers;
  console.log(authtoken);

  if (!authtoken) {
    return res.status(404).send("Access denied");
  }
 
  try {
    const verified = jwt.verify(authtoken, process.env.JWT_SECRET);
    console.log("verified", verified);
    if (!verified) {
      return res.send("token not valid");
    }
    
    next();
  } catch (err) {
    if (err.message === "jwt malformed") {
      return res.status(404).send("no valid token");
    }
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = auth;
