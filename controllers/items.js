const Item = require("../models/Item");
const Warehouse = require("../models/Warehouse");
const Shopinglist = require("../models/Shopinglist");

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const createItem = async (req, res) => {
  const { openedItem, openDate, itemName, itemCount, expDate } = req.body;

  try {
    const newItem = await Item.create({
      openedItem,
      openDate,
      itemName,
      itemCount,
      expDate,
    });
    res.status(201).json(newItem);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const updateItem = async (req, res) => {};

const deleteItem = async (req, res) => {
  //itemid
  const { id } = req.params;
  const { listid } = req.body;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    const updatedShoppingList = await Shopinglist.findByIdAndUpdate(listid, {
      $pull: { items: id },
    }).exec();
    res.status(200).send("Deleted item from shopping list");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const addToShoppingList = async (req, res) => {
  const { id } = req.params;
  const { openedItem, openDate, itemName, itemCount, expDate } = req.body;
  try {
    const newItem = await Item.create({
      openedItem,
      openDate,
      itemName,
      itemCount,
      expDate,
    });
    const updatedShoppingList = await Shopinglist.findByIdAndUpdate(id, {
      $push: { items: newItem._id },
    });
    res.status(201).send(`Added ${newItem.itemName} to shopping list`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const addToWarehouse = async (req, res) => {};

module.exports = {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
  addToShoppingList,
  addToWarehouse,
};
