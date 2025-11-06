import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { date } from "../../types/graphqlScalarTypes/scalarTypesConfig";
import { Controller } from "../../utils/decorators/decorators";
import { Item } from "../../dbConnection/db/DTO/Item/itemDTO";
import { itemOutput } from "../../types/payloads/Item";
import { prisma } from "../../dbConnection/prisma/prisma";

@Controller("")
export class ItemQuery {

    public name: string = 'ItemQuery';

    public buildQueryObject(): GraphQLObjectType<ItemQuery> {
    
        return new GraphQLObjectType<ItemQuery>({
        
            name: this.name,
            
            fields: {
                getItemByUuid: {
                    type: itemOutput,
                    args: {
                        Uuid: { type: new GraphQLNonNull(GraphQLString) }
                    },
                    resolve: async (_, { Uuid }) => {

                        try {

                            return await prisma.items.findUnique({
                                where: {
                                    Uuid: Uuid
                                }
                            });

                        } catch(err) {
                            return err;
                        }
                        
                    }
                },
                getItems: {
                    type: GraphQLList(itemOutput),
                }
            }

        });
    }
}