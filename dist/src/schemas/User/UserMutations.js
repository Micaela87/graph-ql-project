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
exports.UserMutation = void 0;
const graphql_1 = require("graphql");
const userDTO_1 = require("../../dbConnection/db/DTO/User/userDTO");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../types/payloads/User");
const decorators_1 = require("../../utils/decorators/decorators");
const UserResolver_1 = require("./UserResolver");
const prisma_1 = require("../../dbConnection/prisma/prisma");
const payload = new User_1.UserPayload();
const resolvers = new UserResolver_1.UserResolver();
let UserMutation = class UserMutation {
    name = 'Mutation';
    buildMutationObject() {
        const updatePayload = payload.updateUserPayload();
        return new graphql_1.GraphQLObjectType({
            name: this.name,
            fields: {
                createUser: {
                    type: new graphql_1.GraphQLNonNull(User_1.userOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(payload.createUserPayload())
                        }
                    }
                },
                updateUser: {
                    type: new graphql_1.GraphQLNonNull(User_1.userOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(updatePayload)
                        }
                    },
                    resolve: async (_, { updatePayload }) => {
                        console.log(updatePayload, 'hello');
                        const uuid = updatePayload.Uuid;
                        if (!uuid) {
                            throw new Error(undefined, { cause: 404 });
                        }
                        return await prisma_1.prisma.users.update({
                            where: {
                                Uuid: uuid
                            },
                            data: updatePayload
                        });
                    }
                },
                deleteItem: {
                    type: new graphql_1.GraphQLNonNull(User_1.userOutput),
                    args: {
                        input: {
                            type: new graphql_1.GraphQLNonNull(payload.deleteUserPayload())
                        }
                    }
                }
            }
        });
    }
};
exports.UserMutation = UserMutation;
__decorate([
    (0, type_graphql_1.Mutation)(_returns => userDTO_1.User),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", graphql_1.GraphQLObjectType)
], UserMutation.prototype, "buildMutationObject", null);
exports.UserMutation = UserMutation = __decorate([
    (0, decorators_1.Controller)("")
], UserMutation);
