"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../../controllers/User/UserController");
const express = require('express');
const router = express.Router();
const instance = new UserController_1.UserController();
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
router.delete("/:uuid/delete/logical", instance.deleteUser);
module.exports = router;
