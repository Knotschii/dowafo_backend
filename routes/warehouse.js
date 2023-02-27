const express = require("express");

const {
  getAllWarehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
  getSingleWarehouse,
  addItem,
} = require("../controllers/warehouse");

const warehouseRouter = express.Router();

warehouseRouter.route("/warehouse").get(getAllWarehouse).post(createWarehouse);
warehouseRouter
  .route("/warehouse/:id")
  .get(getSingleWarehouse)
  .delete(deleteWarehouse)
  .put(updateWarehouse);

warehouseRouter.post("/additem/:listid", addItem);

// warehouseRouter.get("/warehouse", getAllWarehouse);
// warehouseRouter.post("/createwarehouse", createWarehouse);
// warehouseRouter.delete("/deletewarehouse/:id", deleteWarehouse);
// warehouseRouter.put("/updatewarehouse/:id", updateWarehouse);
// warehouseRouter.get("/singlewarehouse/:id", getSingleWarehouse);

module.exports = warehouseRouter;
