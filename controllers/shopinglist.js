const Shopinglist = require("../models/Shopinglist");

const getAllShopinglist = async (req, res) => {
    try {
        const shopinglist = await Shopinglist.find();
        res.status(200).json({ shopinglist });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const createShopinglist = async (req, res) => {
    const { shopinglistName } = req.body;
    try{
        const newShopinglist = await Shopinglist.create({
            shopinglistName
        });
        res.status(200).json(newShopinglist)
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

const deleteShopinglist = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Job.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Shopinglist deleted");
        }
        throw new Error("Shopinglist not found");
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateShopinglist = async (req, res) => {
    const { id } = req.params;
    const { itemName, itemCount, shopinglistName } = req.body;
    try {
        const updateJob = await Shopinglist.findByIdAndUpdate(
            id,
            { itemName, itemCount, shopinglistName },
            { new: true }
        );
        res.status(200).json(updateShopinglist);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getSingleShopinglist = async (req, res) => {
    res.send('test')
}


module.exports = {
    getAllShopinglist,
    createShopinglist,
    deleteShopinglist,
    updateShopinglist, getSingleShopinglist
}