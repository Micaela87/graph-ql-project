import { GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLOutputType, GraphQLScalarType, GraphQLString } from "graphql";
import { Controller } from "../../utils/decorators/decorators";
import { date } from "../graphqlScalarTypes/scalarTypesConfig";

@Controller("")
export class ItemPayload {
    
    public createItemPayload(): GraphQLInputObjectType {
        
        return new GraphQLInputObjectType({
            
            name: 'createItemPayload',
            
            fields: {
                Name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Description: {
                    type: GraphQLString || ''
                },
                Price: {
                    type: new GraphQLNonNull(GraphQLFloat)
                },
                IsDeleted: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                IsActive: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                CreatedAt: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                UpdatedAt: {
                    type: date
                },
                ActivatedAt: {
                    type: date
                },
                DeletedAt: {
                    type: date
                }
            }
        });

    }

    public updateItemPayload(): GraphQLInputObjectType {

        return new GraphQLInputObjectType({
            
            name: 'updateItemPayload',
            
            fields: {
                Uuid: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Description: {
                    type: GraphQLString || ''
                },
                Price: {
                    type: new GraphQLNonNull(GraphQLFloat)
                },
                IsDeleted: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                IsActive: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                CreatedAt: {
                    type: new GraphQLNonNull(date)
                },
                UpdatedAt: {
                    type: date
                },
                ActivatedAt: {
                    type: date
                },
                DeletedAt: {
                    type: date
                }
            }
        });
    }

    public deleteItemPayload(): GraphQLInputObjectType {

        return new GraphQLInputObjectType({
            
            name: 'deleteItemPayload',
            
            fields: {
                Uuid: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Description: {
                    type: GraphQLString || ''
                },
                Price: {
                    type: new GraphQLNonNull(GraphQLFloat)
                },
                IsDeleted: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                IsActive: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                CreatedAt: {
                    type: new GraphQLNonNull(date)
                },
                UpdatedAt: {
                    type: date
                },
                ActivatedAt: {
                    type: date
                },
                DeletedAt: {
                    type: date
                }
            }
        });

    }

    public createItemOutput(): GraphQLOutputType {

        return new GraphQLObjectType({

            name: "ItemDTO",

            fields: {
                Uuid: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                Description: {
                    type: GraphQLString || ''
                },
                Price: {
                    type: new GraphQLNonNull(GraphQLFloat)
                },
                IsDeleted: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                IsActive: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                CreatedAt: {
                    type: new GraphQLNonNull(date)
                },
                UpdatedAt: {
                    type: date
                },
                ActivatedAt: {
                    type: date
                },
                DeletedAt: {
                    type: date
                }
            }
        });
    }
    
}

export const itemOutput = new ItemPayload().createItemOutput(); 