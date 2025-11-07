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
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const scalarTypesConfig_1 = require("../../../../types/graphqlScalarTypes/scalarTypesConfig");
const moment = require("moment");
let User = class User {
    Uuid;
    FirstName;
    LastName;
    Email; // Has unique constraint
    Password;
    IsActive = 0;
    IsDeleted = 0; // Logical deletion
    // DateTime to register oper
    CreatedAt = moment().format();
    ActivatedAt;
    UpdatedAt;
    DeletedAt; // Only for logical deletion
};
exports.User = User;
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], User.prototype, "Uuid", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], User.prototype, "FirstName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], User.prototype, "LastName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], User.prototype, "Email", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], User.prototype, "Password", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "IsActive", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "IsDeleted", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Date)
], User.prototype, "CreatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Date)
], User.prototype, "ActivatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Date)
], User.prototype, "UpdatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Date)
], User.prototype, "DeletedAt", void 0);
exports.User = User = __decorate([
    (0, type_graphql_1.ObjectType)("User")
], User);
