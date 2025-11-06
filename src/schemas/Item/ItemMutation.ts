import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Item, ItemDTO } from "../../dbConnection/db/DTO/Item/itemDTO"
import { CreateItemDTO } from "../../dbConnection/db/DTO/Item/createItemDTO";
import { UpdateItemDTO } from "../../dbConnection/db/DTO/Item/updateItemDTO";
import { DeleteItemDTO } from "../../dbConnection/db/DTO/Item/deleteItemDTO";
import { Mutation } from "type-graphql";
import { itemOutput } from "../../types/payloads/Item";
import { ItemPayload } from "../../types/payloads/Item";
const payload = new ItemPayload();

/*private schema = buildSchema(`
        
        type Mutation {
            
            createItem(
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
            updatePet(
                Uuid: String!,
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date!,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
            deleteItem(
                Uuid: String!,
                Name: String!,
                Description: String,
                Price: Int!,
                IsDeleted: Int!,
                IsActive: Int!,
                CreatedAt: Date!,
                UpdatedAt: Date!,
                ActivatedAt: Date,
                DeletedAt: Date
            ): Item!
            
        }
    `
)*/


export class ItemMutation {

    public name: string = 'Mutation';

    @Mutation(_returns => Item)
    public buildMutationObject(): GraphQLObjectType {

        return new GraphQLObjectType({

            name: this.name,

            fields: {
                createItem: { 
                    type: new GraphQLNonNull(itemOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(payload.createItemPayload())
                        }
                    }
                },
                updateItem: { 
                    type: new GraphQLNonNull(itemOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(payload.updateItemPayload())
                        }
                    }
                },
                deleteItem: { 
                    type: new GraphQLNonNull(itemOutput),
                    args: {
                        input: {
                            type: new GraphQLNonNull(payload.deleteItemPayload())
                        }
                    }
                    
                }
            }
        })
    }
}