import { Request, Response, NextFunction } from "express";
import { Mutation, Query, Resolver } from "type-graphql";
import { User, UserDTO } from "../../dbConnection/db/DTO/User/userDTO";
import { prisma } from "../../dbConnection/prisma/prisma";
import { CreateUserDTO } from "../../dbConnection/db/DTO/User/createUserDTO";
import { UpdateUserDTO } from "../../dbConnection/db/DTO/User/updateUserDTO";

@Resolver(_return => User)
export class UserResolver {

    @Query((_type) => User)
    public async getUserByUuid(req: Request, res: Response, next: NextFunction): Promise<UserDTO | undefined> {

        try {

            const uuid = req.params.uuid;

            if (!uuid) {
                throw new Error(undefined, { cause: 300 });
            }

            const result = await prisma.users.findUnique({
                where: {
                    Uuid: uuid
                }
            });

            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }

            res.json({ data: result });
            return;

        } catch(err) {
            next(err)
        }
    }

    @Query((_type) => [User])
    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<Array<UserDTO> | undefined> {

        try {

            const result = await prisma.users.findMany();

            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }

            res.json({ data: result });
            return;

        } catch(err) {
            next(err);
        }
    }

    @Mutation(_returns => User)
    public async createUser(req: Request<Request["params"], CreateUserDTO>, res: Response, next: NextFunction): Promise<UserDTO | undefined> {

        try {

            if (req.params.uuid) {

                const alreadyExistst = await prisma.users.findUnique({
                    where: {
                        Uuid: req.params.uuid
                    }
                });


                if (alreadyExistst) {
                    throw new Error(undefined, { cause: 700 });
                }
                
            }

            const payload = req.body;

            const result = await prisma.users.create({
                data: payload
            });

            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }

            res.json({ data: result });
            return;

        } catch(err){
            next(err);
        }
    }

    @Mutation(_returns => User)
    public async updateUser(req: Request<Request["params"], UpdateUserDTO>, res: Response, next: NextFunction): Promise<UserDTO | undefined> {


        try {

            const uuid = req.params.uuid;

            if (!uuid) {
                throw new Error(undefined, { cause: 700 });
            }

            const alreadyExistst = await prisma.users.findUnique({
                where: {
                    Uuid: uuid
                }
            });


            if (!alreadyExistst) {
                throw new Error(undefined, { cause: 700 });
            }

            const payload = req.body;

            const result = await prisma.users.update({
                where: {
                    Uuid: uuid
                },
                data: payload
            });

            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }

            res.json({ data: result });
            return;

        } catch(err) {
            next(err);
        }
    }
}