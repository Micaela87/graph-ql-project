import { createHandler } from "graphql-http";
import { UserSchema } from "../../schemas/User/UserSchema";
import { NextFunction, Request, Response } from "express";
import { ruruHTML } from "ruru/server";

const express = require('express');
const app = express();
const { RuruServerController } = require("../../controllers/ruruServer/RuruServerController");
const ruruServer = new RuruServerController();
const schema = new UserSchema().schema;

app.post("/schema/users", createHandler({ schema: schema }));
app.get("/", ruruServer.mountServer);

module.exports = app;