"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = exports.Mutation = exports.Query = void 0;
const graphql_1 = require("graphql");
const ItemQuery_1 = require("./ItemQuery");
const ItemMutation_1 = require("./ItemMutation");
exports.Query = new ItemQuery_1.ItemQuery().buildQueryObject();
exports.Mutation = new ItemMutation_1.ItemMutation().buildMutationObject();
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
class ItemSchema {
    schema = new graphql_1.GraphQLSchema({
        query: exports.Query
    });
}
exports.ItemSchema = ItemSchema;
