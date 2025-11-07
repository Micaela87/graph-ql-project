import { GraphQLSchema } from "graphql";
import { UserMutation } from "./UserMutations";
import { UserQueryController } from "./UserQuery";
export const Query = new UserQueryController().buildQueryObject();
export const Mutation = new UserMutation().buildMutationObject();

export class UserSchema {
  public schema = new GraphQLSchema({ 
    query: Query,
    mutation: Mutation
  });
}
