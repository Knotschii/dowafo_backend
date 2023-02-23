const express = require("express")

const {
    getAllShopinglist,
    createShopinglist,
    deleteShopinglist,
    updateShopinglist,
    getSingleShopinglist
    
} = require("../controllers/shopinglist")

const shopinglistRouter = express.Router();

shopinglistRouter.get("/shopinglist", getAllShopinglist);

shopinglistRouter.post("/createshopinglist", createShopinglist);

shopinglistRouter.delete("/deleteshopinglist/:id", deleteShopinglist);

shopinglistRouter.put("/updateshopinglist/:id", updateShopinglist);

shopinglistRouter.get("/singleshopinglist/:id", getSingleShopinglist);

module.exports = shopinglistRouter;