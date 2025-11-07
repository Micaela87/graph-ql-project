import { Request, Response, NextFunction } from "express";
import { Controller, Get, Post, Put } from "../../utils/decorators/decorators";
import { ExecutionResult, graphql } from "graphql";
import { UserSchema } from "../../schemas/User/UserSchema";
import { UserResolver } from "../../schemas/User/UserResolver";
import { CreateUserDTO } from "../../dbConnection/db/DTO/User/createUserDTO";
import { UpdateUserDTO } from "../../dbConnection/db/DTO/User/updateUserDTO";
import { DeleteUserDTO } from "../../dbConnection/db/DTO/User/deleteUserDTO";
const schema = new UserSchema().schema;
const resolvers = new UserResolver();

@Controller("/")
export class UserController {

    //https://stackoverflow.com/questions/40390025/why-wont-graphql-on-node-js-call-my-resolve-method
    // per documentazione sull'uso del campo resolve negli oggetti graphql

    @Get("/:uuid")
    public async getUserByUuid(req: Request, res: Response, next: NextFunction): Promise<ExecutionResult> {
        
        await graphql(schema, `{ getUserByUuid(Uuid: "${req.params.uuid}") }`)
            .then(console.log.bind(console));
        
        return await graphql(schema, `{ getUserByUuid(Uuid: "${req.params.uuid}") }`/*, resolvers.getUserByUuid(req, res, next)*/);
    }

    @Get("/")
    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.getUsers(req, res, next));
    }

    @Post("/create")
    public async createUser(req: Request<Request["params"], CreateUserDTO>, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.createUser(req, res, next));
    }

    @Put("/:uuid/update")
    public async updateUser(req: Request<Request["params"], UpdateUserDTO>, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.updateUser(req, res, next));
    }

    @Put("/:uuid/delete/logical")
    public async deleteUser(req: Request<Request["params"], DeleteUserDTO>, res: Response, next: NextFunction): Promise<ExecutionResult | undefined> {
        return await graphql(schema, req.params.uuid, resolvers.deleteUser(req, res, next));
    }
}