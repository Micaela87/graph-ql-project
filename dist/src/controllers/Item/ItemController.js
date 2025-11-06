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
exports.ItemController = void 0;
const decorators_1 = require("../../utils/decorators/decorators");
const ItemResolver_1 = require("../../schemas/Item/ItemResolver");
const graphql_1 = require("graphql");
const ItemSchema_1 = require("../../schemas/Item/ItemSchema");
const resolvers = new ItemResolver_1.ItemResolver();
const schema = new ItemSchema_1.ItemSchema().schema;
let ItemController = class ItemController {
    constructor() { }
    async getItems(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.body, resolvers.getItems(req, res, next));
    }
    async getItemByUuid(req, res, next) {
        return await resolvers.getItemByUuid(req, res, next);
    }
    async createItem(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.body, resolvers.createItem(req, res, next));
    }
    async updateItem(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.body, resolvers.updateItem(req, res, next));
    }
    async deleteItem(req, res, next) {
        return await (0, graphql_1.graphql)(schema, req.body, resolvers.deleteItem(req, res, next));
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, decorators_1.Get)("/items"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "getItems", null);
__decorate([
    (0, decorators_1.Get)("/items/:uuid"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "getItemByUuid", null);
__decorate([
    (0, decorators_1.Post)("/items/create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "createItem", null);
__decorate([
    (0, decorators_1.Put)("/items/:uuid/update"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "updateItem", null);
__decorate([
    (0, decorators_1.Delete)("/items/:uuid/delete/logical"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "deleteItem", null);
exports.ItemController = ItemController = __decorate([
    (0, decorators_1.Controller)("/"),
    __metadata("design:paramtypes", [])
], ItemController);
