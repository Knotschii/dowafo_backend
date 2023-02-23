const mongoose = require("mongoose");

const {Schema} = mongoose;

const ShopinglistSchema = new Schema({
    itemName: {
        type: String, required: true,
    },
    itemCount: {
        type: Number, required: true,
    },
    shopinglistName:{
        type: String, required: true,
    }

});

module.exports = mongoose.model("Shopinglist", ShopinglistSchema);