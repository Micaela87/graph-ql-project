import { GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLOutputType, GraphQLScalarType, GraphQLString } from "graphql";
import { Controller } from "../../utils/decorators/decorators";
import { date } from "../graphqlScalarTypes/scalarTypesConfig";

@Controller("")
export class UserPayload {
    
    public createUserPayload(): GraphQLInputObjectType {
        
        return new GraphQLInputObjectType({
            
            name: 'createUserPayload',
            
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

    public updateUserPayload(): GraphQLInputObjectType {

        return new GraphQLInputObjectType({
            
            name: 'updateUserPayload',
            
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

    public deleteUserPayload(): GraphQLInputObjectType {

        return new GraphQLInputObjectType({
            
            name: 'deleteUserPayload',
            
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

    public createUserOutput(): GraphQLOutputType {

        return new GraphQLObjectType({

            name: "UserDTO",

            fields: {
                Uuid: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                FirstName: {
                    type: GraphQLString
                },
                LastName: {
                    type: GraphQLString
                },
                Email: {
                    type: new GraphQLNonNull(GraphQLString)
                }, // Has unique constraint
                Password:  {
                    type: new GraphQLNonNull(GraphQLString)
                },
                IsActive: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                IsDeleted: {
                    type: new GraphQLNonNull(GraphQLInt)
                }, // Logical deletion

                // DateTime to register operations on table
                CreatedAt: {
                    type: date
                },
                ActivatedAt: {
                    type: date
                },
                UpdatedAt: {
                    type: date
                },
                DeletedAt: {
                    type: date
                }
            }
        });
    }
    
}

export const userOutput = new UserPayload().createUserOutput(); 