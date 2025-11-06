"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQuery = void 0;
const graphql_1 = require("graphql");
const decorators_1 = require("../../utils/decorators/decorators");
const Item_1 = require("../../types/payloads/Item");
const prisma_1 = require("../../dbConnection/prisma/prisma");
let ItemQuery = class ItemQuery {
    name = 'ItemQuery';
    buildQueryObject() {
        return new graphql_1.GraphQLObjectType({
            name: this.name,
            fields: {
                getItemByUuid: {
                    type: Item_1.itemOutput,
                    args: {
                        Uuid: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
                    },
                    resolve: async (_, { Uuid }) => {
                        try {
                            return await prisma_1.prisma.items.findUnique({
                                where: {
                                    Uuid: Uuid
                                }
                            });
                        }
                        catch (err) {
                            return err;
                        }
                    }
                },
                getItems: {
                    type: (0, graphql_1.GraphQLList)(Item_1.itemOutput),
                }
            }
        });
    }
};
exports.ItemQuery = ItemQuery;
exports.ItemQuery = ItemQuery = __decorate([
    (0, decorators_1.Controller)("")
], ItemQuery);
