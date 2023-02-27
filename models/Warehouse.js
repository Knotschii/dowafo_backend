const mongoose = require("mongoose");

const { Schema } = mongoose;

const WarehouseSchema = new Schema({
  listID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shopinglist",
  },
  warehouseName: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "items",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Warehouse", WarehouseSchema);
