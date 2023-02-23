const mongoose = require("mongoose");

const db = async (req, res) =>{
    try {
        const URI = process.env.MONGO_URI;
        mongoose.set("strictQuery", true);
        mongoose.connect(URI);
        console.log("conected to DB");
    } catch(err) {
        console.log(error);
        req.status(500).send("Server Error")
    }
};
module.exports = db;