"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemResolver = void 0;
const itemDTO_1 = require("../../dbConnection/db/DTO/Item/itemDTO");
const Item_1 = require("../../types/payloads/Item");
const type_graphql_1 = require("type-graphql");
const prisma_1 = require("../../dbConnection/prisma/prisma");
const scalarTypesConfig_1 = require("../../types/graphqlScalarTypes/scalarTypesConfig");
const functionUtils_1 = require("../../utils/functions/functionUtils");
let ItemResolver = class ItemResolver {
    itemPayload = new Item_1.ItemPayload();
    payload = this.itemPayload.createItemPayload();
    async getItemByUuid(req, res, next) {
        try {
            const result = await prisma_1.prisma.items.findUnique({
                where: {
                    Uuid: req.params.uuid
                }
            });
            if (!result) {
                throw new Error("CAUSE", { cause: 404 });
            }
            result.Price = scalarTypesConfig_1.decimal.serialize(result.Price);
            res.json({ data: result });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async getItems(req, res, next) {
        try {
            const result = await prisma_1.prisma.items.findMany();
            if (!result.length) {
                throw new Error(undefined, { cause: 404 });
            }
            const formatted = result.map((item) => {
                return { ...item, Price: scalarTypesConfig_1.decimal.serialize(item.Price) };
            });
            res.json({ data: formatted });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async createItem(req, res, next) {
        try {
            if (req.params.uuid) {
                throw new Error(undefined, { cause: 404 });
            }
            const payload = (0, functionUtils_1.payloadValidation)(req.body, "create");
            const result = await prisma_1.prisma.items.create({
                data: payload
            });
            if (!result) {
                throw new Error(undefined, { cause: 404 });
            }
            res.json({ data: result });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async updateItem(req, res, next) {
        try {
            const uuid = req.params.uuid;
            if (!uuid) {
                throw new Error(undefined, { cause: 400 });
            }
            const payload = (0, functionUtils_1.payloadValidation)(req.body, "update");
            const recordExists = await prisma_1.prisma.items.findUnique({
                where: {
                    Uuid: uuid
                }
            });
            if (recordExists) {
                const result = await prisma_1.prisma.items.update({
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
        }
        catch (err) {
            return next(err);
        }
    }
    async deleteItem(req, res, next) {
        try {
            const uuid = req.params.uuid;
            if (!uuid) {
                throw new Error(undefined, { cause: 400 });
            }
            const payload = (0, functionUtils_1.payloadValidation)(req.body, "delete");
            const recordExists = await prisma_1.prisma.items.findUnique({
                where: {
                    Uuid: uuid
                }
            });
            if (recordExists) {
                const result = await prisma_1.prisma.items.update({
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
        }
        catch (err) {
            next(err);
        }
    }
};
exports.ItemResolver = ItemResolver;
__decorate([
    (0, type_graphql_1.Query)((_type) => itemDTO_1.Item),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "getItemByUuid", null);
__decorate([
    (0, type_graphql_1.Query)((_type) => [itemDTO_1.Item]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "getItems", null);
__decorate([
    (0, type_graphql_1.Mutation)(_returns => itemDTO_1.Item),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "createItem", null);
__decorate([
    (0, type_graphql_1.Mutation)(_return => itemDTO_1.Item),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "updateItem", null);
__decorate([
    (0, type_graphql_1.Mutation)(_return => itemDTO_1.Item),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "deleteItem", null);
exports.ItemResolver = ItemResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => itemDTO_1.Item)
], ItemResolver);
