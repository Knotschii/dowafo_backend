const Warehouse = require("../models/Warehouse");
const Shopinglist = require("../models/Shopinglist");

const getAllWarehouse = async (req, res) => {
    try{
        const warehouse = await Warehouse.find();
        res.status(200).json({warehouse});
    } catch(err) {
        res.status(500).send({err: err.message});
    }
};

const createWarehouse = async (req, res) =>{
    try{
    const {warehouseName} = req.body;
    const warehouse = new Warehouse({
        warehouseName
    });
    await warehouse.save();
    res.status(201).json({succes: true, data: warehouse});
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'SERVER ERROR'})
    }
};

const updateWarehouse = async (req, res) => {
res.send('hello test')
}

const deleteWarehouse = async (req, res) => {
res.send('hello test')   
}

const getSingleWarehouse = async (req, res) => {
res.send('hello test')   
}

const addItemToWarehouse = async (req, res) => {
    res.send('hello test')    
}

module.exports = {
    getAllWarehouse,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
    getSingleWarehouse,
    addItemToWarehouse
};

