require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db.js");
const cors = require("cors");
const shopinglistRouter = require("./routes/shopinglist.js");
const warehouseRouter = require("./routes/warehouse.js");
const authRoutes = require("./routes/auth.js");
const itemsRouter = require("./routes/items");

const port = process.env.PORT || 5000;

db();

console.log(new Date());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", shopinglistRouter, warehouseRouter, authRoutes, itemsRouter);

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("GETting tested");
});
