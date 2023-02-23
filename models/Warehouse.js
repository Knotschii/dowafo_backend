const mongoose = require("mongoose");

const {Schema} = mongoose;

const WarehouseSchema = new Schema({
    listID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shopinglist'
    },
    warehouseName: {
        type: String, required: true,
    },

    items: [
        {
    openedItem:{
        type: Boolean, required: true,
    },
    itemName:{
        type: String, required: true,
    },
    itemCount:{
        type: Number, required: true,
    },
    expDate:{
        type: Date,
    }
        }
        ],  
    
    
    
});

module.exports = mongoose.model("Warehouse", WarehouseSchema);