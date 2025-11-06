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
exports.ItemMutation = void 0;
const graphql_1 = require("graphql");
const itemDTO_1 = require("../../dbConnection/db/DTO/Item/itemDTO");
const type_graphql_1 = require("type-graphql");
const Item_1 = require("../../types/payloads/Item");
const Item_2 = require("../../types/payloads/Item");
const payload = new Item_2.ItemPayload();
/*private schema = buildSchema(`
        
        type Mutation {
            
            createItem(
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
            updatePet(
                Uuid: String!,
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date!,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
            deleteItem(
                Uuid: String!,
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date!,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
        }
    `
)*/
class ItemMutation {
    name = 'Mutation';
    buildMutationObject() {
        return new graphql_1.GraphQLObjectType({
            name: this.name,
            fields: {
                createItem: {
                    type: new graphql_1.GraphQLNonNull(Item_1.itemOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(payload.createItemPayload())
                        }
                    }
                },
                updateItem: {
                    type: new graphql_1.GraphQLNonNull(Item_1.itemOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(payload.updateItemPayload())
                        }
                    }
                },
                deleteItem: {
                    type: new graphql_1.GraphQLNonNull(Item_1.itemOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(payload.deleteItemPayload())
                        }
                    }
                }
            }
        });
    }
}
exports.ItemMutation = ItemMutation;
__decorate([
    (0, type_graphql_1.Mutation)(_returns => itemDTO_1.Item),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", graphql_1.GraphQLObjectType)
], ItemMutation.prototype, "buildMutationObject", null);
