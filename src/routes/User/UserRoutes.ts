import { createHandler } from "graphql-http";
import { UserSchema } from "../../schemas/User/UserSchema";
import { Request, Response, NextFunction } from "express";
import { UserController } from "../../controllers/User/UserController";

const express = require('express');
const router = express.Router();
const instance = new UserController();


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
router.delete("/:uuid/delete/logical", instance.deleteUser);

module.exports = router;








