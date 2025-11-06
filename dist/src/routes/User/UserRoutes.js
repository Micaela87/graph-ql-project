"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemSchema_1 = require("../../schemas/Item/ItemSchema");
const UserController_1 = require("../../controllers/User/UserController");
const express = require('express');
const router = express.Router();
const { RuruServerController } = require("../../controllers/ruruServer/RuruServerController");
const ruruServer = new RuruServerController();
const instance = new UserController_1.UserController();
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
router.get("/:uuid", instance.getUserByUuid);
router.get("/", instance.getUsers);
router.post("/create", instance.createUser);
router.put("/:uuid/update", instance.updateUser);
/*router.delete("/:uuid/delete/logical", instance.deleteUser);*/
module.exports = router;
