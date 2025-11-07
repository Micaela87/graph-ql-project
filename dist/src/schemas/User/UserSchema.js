"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.Mutation = exports.Query = void 0;
const graphql_1 = require("graphql");
const UserMutations_1 = require("./UserMutations");
const UserQuery_1 = require("./UserQuery");
exports.Query = new UserQuery_1.UserQueryController().buildQueryObject();
exports.Mutation = new UserMutations_1.UserMutation().buildMutationObject();
class UserSchema {
    schema = new graphql_1.GraphQLSchema({
        query: exports.Query,
        mutation: exports.Mutation
    });
}
exports.UserSchema = UserSchema;
