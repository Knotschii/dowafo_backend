const Warehouse = require("../models/Warehouse");
const Shopinglist = require("../models/Shopinglist");

const getAllWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.find();
    res.status(200).json({ warehouse });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const { warehouseName, items } = req.body;
    const warehouse = new Warehouse({
      warehouseName,
      items,
    });
    await warehouse.save();
    res.status(201).json({ succes: true, data: warehouse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "SERVER ERROR" });
  }
};

const updateWarehouse = async (req, res) => {
  res.send("hello test");
};

const deleteWarehouse = async (req, res) => {
  res.send("hello test");
};

const getSingleWarehouse = async (req, res) => {
  const { id } = req.params;
  try {
    const singleWarehouse = await Warehouse.findById(id).populate("items");
    res.status(200).json(singleWarehouse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const addItem = async (req, res) => {
  const { listid } = req.params;
  const { id } = req.body;

  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(
      listid,
      { $push: { items: id } },
      { new: true }
    ).exec();
    res.status(200).json(updatedWarehouse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllWarehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
  getSingleWarehouse,
  addItem,
};
