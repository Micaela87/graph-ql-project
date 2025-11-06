import { Request, Response, NextFunction } from "express";
import { Item, ItemDTO } from "../../dbConnection/db/DTO/Item/itemDTO";
import { ItemPayload } from "../../types/payloads/Item";
import { CreateItemDTO } from "../../dbConnection/db/DTO/Item/createItemDTO";
import { GraphQLInputObjectType, GraphQLOutputType } from "graphql";
import { createHandler } from "graphql-http";
import { ItemSchema } from "./ItemSchema";
import { InputType, Mutation, Query, Resolver } from "type-graphql";
import { ItemQuery } from "./ItemQuery";
import { ItemMutation } from "./ItemMutation";
import { prisma } from "../../dbConnection/prisma/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { decimal } from "../../types/graphqlScalarTypes/scalarTypesConfig";
import { payloadValidation, processGraphQLPayload } from "../../utils/functions/functionUtils";
import { UpdateItemDTO } from "../../dbConnection/db/DTO/Item/updateItemDTO";
import { DeleteItemDTO } from "../../dbConnection/db/DTO/Item/deleteItemDTO";


@Resolver(() => Item)
export class ItemResolver {

    private itemPayload: ItemPayload = new ItemPayload();
    private payload: GraphQLInputObjectType = this.itemPayload.createItemPayload();

    @Query((_type) => Item)
    public async getItemByUuid(req: Request<Request['params']>, res: Response, next: NextFunction): Promise<any> {
        
        try {

            const result = await prisma.items.findUnique({
                where: {
                    Uuid: req.params.uuid
                }
            });

            if (!result) {
                throw new Error("CAUSE", { cause: 404 });
            }

            result!.Price = decimal.serialize(result!.Price);

            res.json({ data: result });
            return;

        } catch(err) {
            next(err);
        }

    }

    @Query((_type) => [Item])
    public async getItems(req: Request, res: Response, next: NextFunction): Promise<Array<ItemDTO> | undefined> {

        try {

            const result = await prisma.items.findMany();

            if (!result.length) {
                throw new Error(undefined, { cause: 404 })
            }

            const formatted = result.map((item: ItemDTO) => {
                return {...item, Price: decimal.serialize(item.Price)} 
            });

            res.json({ data: formatted });
            return;

        } catch(err) {
            next(err);
        }
    }

    @Mutation(_returns => Item)
    public async createItem(req: Request<Request['params'], CreateItemDTO>, res: Response, next: NextFunction): Promise<ItemDTO | undefined> {

        try {

            if (req.params.uuid) {
                throw new Error(undefined, { cause: 404 });
            }

            const payload = payloadValidation(req.body, "create");

            const result = await prisma.items.create({
                data: payload
            });

            if (!result) {
                throw new Error(undefined, { cause: 404 });
            }

            res.json({ data: result });
            return;

        } catch(err) {
            next(err);
        }

    }

    @Mutation(_return => Item)
    public async updateItem(req: Request<Request['params'], UpdateItemDTO>, res: Response, next: NextFunction): Promise<ItemDTO | undefined | void> {

        try {

            const uuid = req.params.uuid;

            if (!uuid) {
                throw new Error(undefined, { cause: 400 });
            }

            const payload = payloadValidation(req.body, "update");

            const recordExists = await prisma.items.findUnique({
                where: {
                     Uuid: uuid
                }
            });

            if (recordExists) {

                const result = await prisma.items.update({
                    where: {
                        Uuid: uuid
                    },
                    data: payload
                });

                if (!result) {
                    throw new Error(undefined, { cause: 404 });
                }

                res.json({ data: result });
                return;
            }
            
            // TODO decide to create a record if it does not exist
            if (!recordExists) {
                throw new Error(undefined, { cause: 404 });
            }

        } catch(err) {
            return next(err);
        }
    }

    @Mutation(_return => Item)
    public async deleteItem(req: Request<Request['params'], DeleteItemDTO>, res: Response, next: NextFunction): Promise<ItemDTO | undefined> {

        try {

            const uuid = req.params.uuid;

            if (!uuid) {
                throw new Error(undefined, { cause: 400 });
            }

            const payload = payloadValidation(req.body, "delete");

            const recordExists = await prisma.items.findUnique({
                where: {
                     Uuid: uuid
                }
            });

            if (recordExists) {

                const result = await prisma.items.update({
                    where: {
                        Uuid: uuid
                    },
                    data: payload
                });

                if (!result) {
                    throw new Error(undefined, { cause: 404 });
                }

                res.json({ data: result });
                return;

            }

            // TODO decide to create a record if it does not exist
            if (!recordExists) {
                throw new Error(undefined, { cause: 404 });
            }


        } catch(err) {
            next(err);
        }

    }

}