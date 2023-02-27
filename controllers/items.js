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

const getItem = async (req, res) => {};

const updateItem = async (req, res) => {};

const deleteItem = async (req, res) => {};

const addToShoppingList = async (req, res) => {};

const addToWarehouse = async (req, res) => {};

module.exports = { getItems, createItem, getItem, updateItem, deleteItem };
