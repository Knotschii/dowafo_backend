const Shopinglist = require("../models/Shopinglist");
const Warehouse = require("../models/Warehouse");
const Item = require("../models/Item");

const getAllShopinglist = async (req, res) => {
  try {
    const shopinglist = await Shopinglist.find();
    res.status(200).json({ shopinglist });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const createShopinglist = async (req, res) => {
  const { shopinglistName } = req.body;
  try {
    const newShopinglist = await Shopinglist.create({
      shopinglistName,
    });
    res.status(200).json(newShopinglist);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

const deleteShopinglist = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Job.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Shopinglist deleted");
    }
    throw new Error("Shopinglist not found");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateShopinglist = async (req, res) => {
  const { id } = req.params;
  const { itemName, itemCount, shopinglistName } = req.body;
  try {
    const updateJob = await Shopinglist.findByIdAndUpdate(
      id,
      { itemName, itemCount, shopinglistName },
      { new: true }
    );
    res.status(200).json(updateShopinglist);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getSingleShopinglist = async (req, res) => {
  const { id } = req.params;
  try {
    const singleList = await Shopinglist.findById(id).populate("items");
    res.status(200).json(singleList);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//add a new item to an existing list
const addItem = async (req, res) => {
  const { listid } = req.params;
  const { openedItem, openDate, itemName, itemCount, expDate } = req.body;

  try {
    //1. create a new item
    const newItem = await Item.create({
      openedItem,
      openDate,
      itemName,
      itemCount,
      expDate,
    });
    const updatedShopinglist = await Shopinglist.findByIdAndUpdate(
      listid,
      { $push: { items: newItem._id } },
      { new: true }
    ).exec();
    res.status(200).json(updatedShopinglist);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//move item from the shoppinglist to the warehouse
const buyItem = async (req, res) => {
  //id of shoppinglist & warehouse
  const { listid, warehouseid } = req.params;
  //id of item
  const { id } = req.body;

  try {
    const updatedShopinglist = await Shopinglist.findByIdAndUpdate(
      listid,
      //remove item with id from the shoppinglist
      { $pull: { items: id } },
      { new: true }
    ).exec();
    //add item with id to the warehouse
    const addToWarehouse = await Warehouse.findByIdAndUpdate(
      warehouseid,
      { $push: { items: id } },
      { new: true }
    ).exec();
    res.status(200).send(`Moved item to warehouse`);
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllShopinglist,
  createShopinglist,
  deleteShopinglist,
  updateShopinglist,
  getSingleShopinglist,
  addItem,
  buyItem,
};
