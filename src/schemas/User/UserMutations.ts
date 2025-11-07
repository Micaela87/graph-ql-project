import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { User } from "../../dbConnection/db/DTO/User/userDTO";
import { Mutation } from "type-graphql";
import { userOutput, UserPayload } from "../../types/payloads/User";
import { Controller } from "../../utils/decorators/decorators";
import { UserResolver } from "./UserResolver";
import { prisma } from "../../dbConnection/prisma/prisma";
const payload = new UserPayload();
const resolvers = new UserResolver();

@Controller("")
export class UserMutation {

    public name: string = 'Mutation';

    @Mutation(_returns => User)
    public buildMutationObject(): GraphQLObjectType {

        const updatePayload = payload.updateUserPayload();

        return new GraphQLObjectType({

            name: this.name,

            fields: {
                createUser: { 
                    type: new GraphQLNonNull(userOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(payload.createUserPayload())
                        }
                    }
                },
                updateUser: { 
                    type: new GraphQLNonNull(userOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(updatePayload)
                        }
                    },
                    resolve: async (_, { updatePayload }) => {

                        console.log(updatePayload, 'hello');
                        
                        const uuid = updatePayload.Uuid;
                        if (!uuid) {
                            throw new Error(undefined, { cause: 404 });
                        }

                        return await prisma.users.update({
                            where: {
                                Uuid: uuid
                            },
                            data: updatePayload
                        });
                    }
                },
                deleteItem: { 
                    type: new GraphQLNonNull(userOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(payload.deleteUserPayload())
                        }
                    }
                    
                }
            }
        })
    }
}