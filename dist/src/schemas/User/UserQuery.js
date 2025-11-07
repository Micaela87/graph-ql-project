"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryController = void 0;
const graphql_1 = require("graphql");
const decorators_1 = require("../../utils/decorators/decorators");
const prisma_1 = require("../../dbConnection/prisma/prisma");
const User_1 = require("../../types/payloads/User");
const users = require("../../dbConnection/db/mock/Users");
let UserQueryController = class UserQueryController {
    name = 'UserQuery';
    buildQueryObject() {
        return new graphql_1.GraphQLObjectType({
            name: this.name,
            fields: {
                getUserByUuid: {
                    type: User_1.userOutput,
                    args: {
                        Uuid: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
                    },
                    resolve: (_, { Uuid }) => {
                        //return users.find((user: User) => user.Uuid === Uuid);
                    }
                },
                getUsers: {
                    type: (0, graphql_1.GraphQLList)(User_1.userOutput),
                    resolve: async () => {
                        console.log('im here');
                        return await prisma_1.prisma.users.findMany();
                    }
                }
            }
        });
    }
};
exports.UserQueryController = UserQueryController;
exports.UserQueryController = UserQueryController = __decorate([
    (0, decorators_1.Controller)("")
], UserQueryController);
