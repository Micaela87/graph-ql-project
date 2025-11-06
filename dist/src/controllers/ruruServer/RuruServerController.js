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
exports.RuruServerController = void 0;
const decorators_1 = require("../../utils/decorators/decorators");
const server_1 = require("ruru/server");
const ItemResolver_1 = require("../../schemas/Item/ItemResolver");
const ItemSchema_1 = require("../../schemas/Item/ItemSchema");
const resolvers = new ItemResolver_1.ItemResolver();
const schema = new ItemSchema_1.ItemSchema().schema;
let RuruServerController = class RuruServerController {
    constructor() { }
    async mountServer(req, res, next) {
        res.type("json");
        res.end((0, server_1.ruruHTML)({ endpoint: '/ruru/server' }));
        return;
    }
};
exports.RuruServerController = RuruServerController;
__decorate([
    (0, decorators_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], RuruServerController.prototype, "mountServer", null);
exports.RuruServerController = RuruServerController = __decorate([
    (0, decorators_1.Controller)("/"),
    __metadata("design:paramtypes", [])
], RuruServerController);
