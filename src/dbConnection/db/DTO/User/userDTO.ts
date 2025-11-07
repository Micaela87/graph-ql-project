import { Field, Int, ObjectType } from "type-graphql";
import { date } from "../../../../types/graphqlScalarTypes/scalarTypesConfig";
const moment = require("moment");

export interface UserDTO {

    Uuid: string;
    FirstName: string;
    LastName: string;
    Email: string; // Has unique constraint
    Password: string;
    IsActive: number;
    IsDeleted: number; // Logical deletion

    // DateTime to register operations on table
    CreatedAt: Date;
    ActivatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date; // Only for logical deletion

    //public List<Order> Orders { get; set; } = [];
}

@ObjectType("User")
export class User {

    @Field((_type) => String!)
    Uuid!: string;

    @Field((_type) => String!)
    FirstName!: string;

    @Field((_type) => String!)
    LastName!: string;

    @Field((_type) => String!)
    Email!: string; // Has unique constraint

    @Field((_type) => String!)
    Password!: string;

    @Field((_type) => Int!)
    IsActive: number = 0;

    @Field((_type) => Int!)
    IsDeleted: number = 0; // Logical deletion

    // DateTime to register oper
    @Field((_type) => date!)
    CreatedAt: Date = moment().format();

    @Field((_type) => date!)
    ActivatedAt?: Date;

    @Field((_type) => date!)
    UpdatedAt?: Date;

    @Field((_type) => date!)
    DeletedAt?: Date; // Only for logical deletion
}