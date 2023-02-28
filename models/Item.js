const mongoose = require("mongoose");

const { Schema } = mongoose;

const Item = new Schema({
  openedItem: {
    type: Boolean,
    required: true,
  },
  openDate: {
    type: Date,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemCount: {
    type: Number,
    required: true,
  },
  expDate: {
    type: Date,
  },
});

module.exports = mongoose.model("items", Item);
