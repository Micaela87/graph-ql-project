import { GraphQLSchema } from "graphql";
import { ItemQuery } from "./ItemQuery";
import { ItemMutation } from "./ItemMutation";

export const Query = new ItemQuery().buildQueryObject();
export const Mutation = new ItemMutation().buildMutationObject();

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

export class ItemSchema {
  public schema: GraphQLSchema = new GraphQLSchema({ 
    query: Query
  });
}
