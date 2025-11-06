import { Request, Response, NextFunction } from "express";
import { Controller, Get } from "../../utils/decorators/decorators";
import { ruruHTML } from "ruru/server";
import { graphql } from "graphql";
import { ItemResolver } from "../../schemas/Item/ItemResolver";
import { ItemSchema } from "../../schemas/Item/ItemSchema";
const resolvers: ItemResolver = new ItemResolver();
const schema = new ItemSchema().schema;

@Controller("/")
export class RuruServerController {

    constructor() {}

    @Get("/")
    public async mountServer(req: Request, res: Response, next: NextFunction): Promise<HTMLDocument | undefined> {
        res.type("json");
        res.end(ruruHTML({ endpoint: '/ruru/server' }));
        return;
    }
}