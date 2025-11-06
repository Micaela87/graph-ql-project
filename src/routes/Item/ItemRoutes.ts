import { createHandler } from "graphql-http";
import { ItemSchema } from "../../schemas/Item/ItemSchema";
import { Request, Response, NextFunction } from "express";

const express = require('express');
const router = express.Router();
const { ItemController } = require("../../controllers/Item/ItemController");
const { RuruServerController } = require("../../controllers/ruruServer/RuruServerController");

const ruruServer = new RuruServerController();
const instance = new ItemController();
const schema = new ItemSchema().schema;

router.param('uuid', (req: Request, res: Response, next: NextFunction, uuid: string) => {
    
    try {
        req.params.uuid = uuid;
        next();

    } catch(err) {
        next(err);
    }
});

router.get("/items/:uuid", instance.getItemByUuid);
router.get("/items", instance.getItems);

router.post("/items/create", instance.createItem);
router.put("/items/:uuid/update", instance.updateItem);
router.delete("/items/:uuid/delete/logical", instance.deleteItem);

module.exports = router;








