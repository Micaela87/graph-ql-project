"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOutput = exports.UserPayload = void 0;
const graphql_1 = require("graphql");
const decorators_1 = require("../../utils/decorators/decorators");
const scalarTypesConfig_1 = require("../graphqlScalarTypes/scalarTypesConfig");
let UserPayload = class UserPayload {
    createUserPayload() {
        return new graphql_1.GraphQLInputObjectType({
            name: 'createUserPayload',
            fields: {
                Name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                Description: {
                    type: graphql_1.GraphQLString || ''
                },
                Price: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat)
                },
                IsDeleted: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                IsActive: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                CreatedAt: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                UpdatedAt: {
                    type: scalarTypesConfig_1.date
                },
                ActivatedAt: {
                    type: scalarTypesConfig_1.date
                },
                DeletedAt: {
                    type: scalarTypesConfig_1.date
                }
            }
        });
    }
    updateUserPayload() {
        return new graphql_1.GraphQLInputObjectType({
            name: 'updateUserPayload',
            fields: {
                Uuid: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                Name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                Description: {
                    type: graphql_1.GraphQLString || ''
                },
                Price: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat)
                },
                IsDeleted: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                IsActive: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                CreatedAt: {
                    type: new graphql_1.GraphQLNonNull(scalarTypesConfig_1.date)
                },
                UpdatedAt: {
                    type: scalarTypesConfig_1.date
                },
                ActivatedAt: {
                    type: scalarTypesConfig_1.date
                },
                DeletedAt: {
                    type: scalarTypesConfig_1.date
                }
            }
        });
    }
    deleteUserPayload() {
        return new graphql_1.GraphQLInputObjectType({
            name: 'deleteUserPayload',
            fields: {
                Uuid: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                Name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                Description: {
                    type: graphql_1.GraphQLString || ''
                },
                Price: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat)
                },
                IsDeleted: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                IsActive: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                CreatedAt: {
                    type: new graphql_1.GraphQLNonNull(scalarTypesConfig_1.date)
                },
                UpdatedAt: {
                    type: scalarTypesConfig_1.date
                },
                ActivatedAt: {
                    type: scalarTypesConfig_1.date
                },
                DeletedAt: {
                    type: scalarTypesConfig_1.date
                }
            }
        });
    }
    createUserOutput() {
        return new graphql_1.GraphQLObjectType({
            name: "UserDTO",
            fields: {
                Uuid: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                FirstName: {
                    type: graphql_1.GraphQLString
                },
                LastName: {
                    type: graphql_1.GraphQLString
                },
                Email: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                }, // Has unique constraint
                Password: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                },
                IsActive: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                },
                IsDeleted: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
                }, // Logical deletion
                // DateTime to register operations on table
                CreatedAt: {
                    type: scalarTypesConfig_1.date
                },
                ActivatedAt: {
                    type: scalarTypesConfig_1.date
                },
                UpdatedAt: {
                    type: scalarTypesConfig_1.date
                },
                DeletedAt: {
                    type: scalarTypesConfig_1.date
                }
            }
        });
    }
};
exports.UserPayload = UserPayload;
exports.UserPayload = UserPayload = __decorate([
    (0, decorators_1.Controller)("")
], UserPayload);
exports.userOutput = new UserPayload().createUserOutput();
