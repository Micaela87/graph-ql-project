import { Request, Response, NextFunction } from "express";
import { Controller, Delete, Get, Post, Put } from "../../utils/decorators/decorators";
import { ItemResolver } from "../../schemas/Item/ItemResolver";
import { ExecutionResult, graphql } from "graphql";
import { ItemSchema } from "../../schemas/Item/ItemSchema";
import { UpdateItemDTO } from "../../dbConnection/db/DTO/Item/updateItemDTO";
import { CreateItemDTO } from "../../dbConnection/db/DTO/Item/createItemDTO";
import { ItemDTO } from "../../dbConnection/db/DTO/Item/itemDTO";
import { DeleteItemDTO } from "../../dbConnection/db/DTO/Item/deleteItemDTO";
const resolvers: ItemResolver = new ItemResolver();
const schema = new ItemSchema().schema;

@Controller("/")
export class ItemController {

    constructor() {}

    @Get("/items")
    public async getItems(req: Request, res: Response, next: NextFunction): Promise<ExecutionResult> {
        return await graphql(schema, req.body, resolvers.getItems(req, res, next));
    }

    @Get("/items/:uuid")
    public async getItemByUuid(req: Request, res: Response, next: NextFunction): Promise<ItemDTO | void> {
        return await resolvers.getItemByUuid(req, res, next);
    }

    @Post("/items/create")
    public async createItem(req: Request<Request['params'], CreateItemDTO>, res: Response, next: NextFunction): Promise<ExecutionResult> {
        return await graphql(schema, req.body, resolvers.createItem(req, res, next));
    }

    @Put("/items/:uuid/update")
    public async updateItem(req: Request<Request['params'], UpdateItemDTO>, res: Response, next: NextFunction): Promise<ExecutionResult> {
        return await graphql(schema, req.body, resolvers.updateItem(req, res, next));
    }

    @Delete("/items/:uuid/delete/logical")
    public async deleteItem(req: Request<Request['params'], DeleteItemDTO>, res: Response, next: NextFunction): Promise<ExecutionResult> {
        return await graphql(schema, req.body, resolvers.deleteItem(req, res, next));
    }
}


