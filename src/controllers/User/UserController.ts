import { Request, Response, NextFunction } from "express";
import { Controller, Get, Post, Put } from "../../utils/decorators/decorators";
import { ExecutionResult, graphql } from "graphql";
import { ItemSchema } from "../../schemas/Item/ItemSchema";
import { UserResolver } from "../../schemas/User/UserResolver";
import { CreateUserDTO } from "../../dbConnection/db/DTO/User/createUserDTO";
import { UpdateUserDTO } from "../../dbConnection/db/DTO/User/updateUserDTO";
const schema = new ItemSchema().schema;
const resolvers = new UserResolver();

@Controller("/")
export class UserController {

    @Get("/:uuid")
    public async getUserByUuid(req: Request, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.getUserByUuid(req, res, next));
    }

    @Get("/")
    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.getUsers(req, res, next));
    }

    @Post("/create")
    public async createUser(req: Request<Request["params"], CreateUserDTO>, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.createUser(req, res, next));
    }

    @Put("/update")
    public async updateUser(req: Request<Request["params"], UpdateUserDTO>, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.updateUser(req, res, next));
    }
}