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
exports.UserController = void 0;
const decorators_1 = require("../../utils/decorators/decorators");
const graphql_1 = require("graphql");
const UserSchema_1 = require("../../schemas/User/UserSchema");
const UserResolver_1 = require("../../schemas/User/UserResolver");
const schema = new UserSchema_1.UserSchema().schema;
const resolvers = new UserResolver_1.UserResolver();
let UserController = class UserController {
    //https://stackoverflow.com/questions/40390025/why-wont-graphql-on-node-js-call-my-resolve-method
    // per documentazione sull'uso del campo resolve negli oggetti graphql
    async getUserByUuid(req, res, next) {
        await (0, graphql_1.graphql)(schema, `{ getUserByUuid(Uuid: "${req.params.uuid}") }`)
            .then(console.log.bind(console));
        return await (0, graphql_1.graphql)(schema, `{ getUserByUuid(Uuid: "${req.params.uuid}") }` /*, resolvers.getUserByUuid(req, res, next)*/);
    }
    async getUsers(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.params.uuid, resolvers.getUsers(req, res, next));
    }
    async createUser(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.params.uuid, resolvers.createUser(req, res, next));
    }
    async updateUser(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.params.uuid, resolvers.updateUser(req, res, next));
    }
    async deleteUser(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.params.uuid, resolvers.deleteUser(req, res, next));
    }
};
exports.UserController = UserController;
__decorate([
    (0, decorators_1.Get)("/:uuid"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByUuid", null);
__decorate([
    (0, decorators_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, decorators_1.Post)("/create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, decorators_1.Put)("/:uuid/update"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, decorators_1.Put)("/:uuid/delete/logical"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, decorators_1.Controller)("/")
], UserController);
