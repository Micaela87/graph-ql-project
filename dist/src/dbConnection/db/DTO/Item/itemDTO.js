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
exports.Item = void 0;
const type_graphql_1 = require("type-graphql");
const scalarTypesConfig_1 = require("../../../../types/graphqlScalarTypes/scalarTypesConfig");
const library_1 = require("@prisma/client/runtime/library");
let Item = class Item {
    Uuid;
    Name;
    Description;
    Price;
    IsDeleted;
    IsActive;
    CreatedAt;
    UpdatedAt;
    ActivatedAt;
    DeletedAt;
};
exports.Item = Item;
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Item.prototype, "Uuid", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Item.prototype, "Name", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", Object)
], Item.prototype, "Description", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.decimal),
    __metadata("design:type", library_1.Decimal)
], Item.prototype, "Price", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], Item.prototype, "IsDeleted", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], Item.prototype, "IsActive", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Date)
], Item.prototype, "CreatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Object)
], Item.prototype, "UpdatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Object)
], Item.prototype, "ActivatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => scalarTypesConfig_1.date),
    __metadata("design:type", Object)
], Item.prototype, "DeletedAt", void 0);
exports.Item = Item = __decorate([
    (0, type_graphql_1.ObjectType)()
], Item);
/*buildSchema(`
  type Item {
      Uuid: Uuid!
      Name: String!
      Description: String
      Price: Float!
      IsDeleted: Int!
      IsActive: Int!
      CreatedAt: Date!
      UpdatedAt: Date
      ActivatedAt: Date
      DeletedAt: Date
  }
`);*/ 
