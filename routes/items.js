const express = require("express");
const itemsRouter = express.Router();

const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
  addToShoppingList,
  addToWarehouse,
} = require("../controllers/items");

itemsRouter.route("/items").get(getItems).post(createItem);

itemsRouter.route("/items/:id").get(getItem).put(updateItem).delete(deleteItem);

itemsRouter.route("shopinglist/:id/items/:id/addToShoppingList").post(addToShoppingList);

module.exports = itemsRouter;
