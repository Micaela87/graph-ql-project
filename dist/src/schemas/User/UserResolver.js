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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const userDTO_1 = require("../../dbConnection/db/DTO/User/userDTO");
const prisma_1 = require("../../dbConnection/prisma/prisma");
let UserResolver = class UserResolver {
    async getUserByUuid(req, res, next) {
        try {
            const uuid = req.params.uuid;
            if (!uuid) {
                throw new Error(undefined, { cause: 300 });
            }
            const result = await prisma_1.prisma.users.findUnique({
                where: {
                    Uuid: uuid
                }
            });
            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }
            res.json({ data: result });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async getUsers(req, res, next) {
        try {
            const result = await prisma_1.prisma.users.findMany();
            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }
            res.json({ data: result });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async createUser(req, res, next) {
        try {
            if (req.params.uuid) {
                const alreadyExistst = await prisma_1.prisma.users.findUnique({
                    where: {
                        Uuid: req.params.uuid
                    }
                });
                if (alreadyExistst) {
                    throw new Error(undefined, { cause: 700 });
                }
            }
            const payload = req.body;
            const result = await prisma_1.prisma.users.create({
                data: payload
            });
            if (!result) {
                throw new Error(undefined, { cause: 700 });
            }
            res.json({ data: result });
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async updateUser(req, res, next) {
        try {
            const uuid = req.params.uuid;
            if (!uuid) {
                throw new Error(undefined, { cause: 700 });
            }
            const alreadyExistst = await prisma_1.prisma.users.findUnique({
                where: {
                    Uuid: uuid
                }
            });
            if (!alreadyExistst) {
                throw new Error(undefined, { cause: 700 });
            }
            const payload = req.body;
            const result = await prisma_1.prisma.users.update({
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
        }
        catch (err) {
            next(err);
        }
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, type_graphql_1.Query)((_type) => userDTO_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserByUuid", null);
__decorate([
    (0, type_graphql_1.Query)((_type) => [userDTO_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(_returns => userDTO_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(_returns => userDTO_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(_return => userDTO_1.User)
], UserResolver);
