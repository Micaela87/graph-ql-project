"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemSchema_1 = require("../../schemas/Item/ItemSchema");
const express = require('express');
const router = express.Router();
const { ItemController } = require("../../controllers/Item/ItemController");
const { RuruServerController } = require("../../controllers/ruruServer/RuruServerController");
const ruruServer = new RuruServerController();
const instance = new ItemController();
const schema = new ItemSchema_1.ItemSchema().schema;
router.param('uuid', (req, res, next, uuid) => {
    try {
        req.params.uuid = uuid;
        next();
    }
    catch (err) {
        next(err);
    }
});
router.get("/items/:uuid", instance.getItemByUuid);
router.get("/items", instance.getItems);
router.post("/items/create", instance.createItem);
router.put("/items/:uuid/update", instance.updateItem);
router.delete("/items/:uuid/delete/logical", instance.deleteItem);
module.exports = router;
