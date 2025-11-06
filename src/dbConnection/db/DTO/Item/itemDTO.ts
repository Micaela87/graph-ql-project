import { Field, Int, ObjectType } from "type-graphql";
import { date, decimal } from "../../../../types/graphqlScalarTypes/scalarTypesConfig";
import { Decimal } from "@prisma/client/runtime/library";

export interface ItemDTO {
    Uuid: string;
    Name: string;
    Description?: string | null;
    Price: Decimal;
    IsDeleted: number;
    IsActive: number;
    CreatedAt: Date;
    UpdatedAt?: Date | null;
    ActivatedAt?: Date | null;
    DeletedAt?: Date | null;
}

@ObjectType()
export class Item {

    @Field((_type) => String!)
    Uuid!: string;

    @Field((_type) => String!)
    Name!: string;

    @Field((_type) => String)
    Description?: string | null;

    @Field((_type) => decimal!)
    Price!: Decimal;

    @Field((_type) => Int!)
    IsDeleted!: number;

    @Field((_type) => Int!)
    IsActive!: number;

    @Field((_type) => date!)
    CreatedAt!: Date;

    @Field((_type) => date)
    UpdatedAt?: Date | null;

    @Field((_type) => date)
    ActivatedAt?: Date | null;

    @Field((_type) => date)
    DeletedAt?: Date | null;
}

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