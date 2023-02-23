const express = require("express")

const {
    getHomeRouter
} = require("../controllers/home")

const homeRouter = express.Router();

homeRouter.get("/", getHomeRouter);

module.exports = homeRouter;