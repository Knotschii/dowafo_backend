const express = require("express")

const {
    getAllWarehouse,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
    getSingleWarehouse
} = require("../controllers/warehouse")

const warehouseRouter = express.Router();

warehouseRouter.get("/warehouse", getAllWarehouse);

warehouseRouter.post("/createwarehouse", createWarehouse);

warehouseRouter.delete("/deletewarehouse/:id", deleteWarehouse);

warehouseRouter.put("/updatewarehouse/:id", updateWarehouse);

warehouseRouter.get("/singlewarehouse/:id", getSingleWarehouse);

module.exports = warehouseRouter;