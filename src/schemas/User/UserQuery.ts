import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Controller } from "../../utils/decorators/decorators";
import { prisma } from "../../dbConnection/prisma/prisma";
import { userOutput } from "../../types/payloads/User";
import { User } from "../../dbConnection/db/DTO/User/userDTO";
const users = require("../../dbConnection/db/mock/Users");

@Controller("")
export class UserQueryController {

    public name: string = 'UserQuery';

    public buildQueryObject(): GraphQLObjectType {
    
        return new GraphQLObjectType({
        
            name: this.name,
            
            fields: {
                getUserByUuid: {
                    type: userOutput,
                    args: {
                        Uuid: { type: new GraphQLNonNull(GraphQLString) }
                    },
                    resolve: (_, { Uuid }) => {


                        //return users.find((user: User) => user.Uuid === Uuid);
                        
                    }
                },
                getUsers: {
                    type: GraphQLList(userOutput),
                    resolve: async () => {
                        console.log('im here');
                            return await prisma.users.findMany();
                    }
                }
            }

        });
    }
}