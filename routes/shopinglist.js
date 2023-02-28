const express = require("express");

const {
  getAllShopinglist,
  createShopinglist,
  deleteShopinglist,
  updateShopinglist,
  getSingleShopinglist,
  addItem,
  buyItem,
} = require("../controllers/shopinglist");

const shopinglistRouter = express.Router();

shopinglistRouter
  .route("/shopinglist")
  .get(getAllShopinglist)
  .post(createShopinglist);

  
shopinglistRouter
  .route("/shopinglist/:id")
  .get(getSingleShopinglist)
  .delete(deleteShopinglist)
  .put(updateShopinglist);

shopinglistRouter.post("/additem/:listid", addItem);

shopinglistRouter.put("/shoppinglist/:listid/moveto/:warehouseid", buyItem);

// shopinglistRouter.get("/shopinglist", getAllShopinglist);
// shopinglistRouter.post("/createshopinglist", createShopinglist);
// shopinglistRouter.delete("/deleteshopinglist/:id", deleteShopinglist);
// shopinglistRouter.put("/updateshopinglist/:id", updateShopinglist);
// shopinglistRouter.get("/singleshopinglist/:id", getSingleShopinglist);

module.exports = shopinglistRouter;
