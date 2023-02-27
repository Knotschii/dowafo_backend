const express = require("express");
const itemsRouter = express.Router();

const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

itemsRouter.route("/items").get(getItems).post(createItem);

itemsRouter.route("/items/:id").get(getItem).put(updateItem).delete(deleteItem);

module.exports = itemsRouter;
