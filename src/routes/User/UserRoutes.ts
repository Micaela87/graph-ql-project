import { createHandler } from "graphql-http";
import { ItemSchema } from "../../schemas/Item/ItemSchema";
import { Request, Response, NextFunction } from "express";
import { UserController } from "../../controllers/User/UserController";

const express = require('express');
const router = express.Router();
const { RuruServerController } = require("../../controllers/ruruServer/RuruServerController");

const ruruServer = new RuruServerController();
const instance = new UserController();
const schema = new ItemSchema().schema;

router.param('uuid', (req: Request, res: Response, next: NextFunction, uuid: string) => {
    
    try {
        req.params.uuid = uuid;
        next();

    } catch(err) {
        next(err);
    }
});

router.get("/:uuid", instance.getUserByUuid);
router.get("/", instance.getUsers);

router.post("/create", instance.createUser);
router.put("/:uuid/update", instance.updateUser);
/*router.delete("/:uuid/delete/logical", instance.deleteUser);*/

module.exports = router;








