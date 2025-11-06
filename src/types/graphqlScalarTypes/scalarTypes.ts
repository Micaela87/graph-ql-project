import { GraphQLError, GraphQLScalarType, Kind, ValueNode } from "graphql";
const { moment } = require("moment");


export class ScalarType {

  static _instance: InstanceType<typeof ScalarType> | null = null;

  constructor() {}

  static getInstance() {

      if (!this._instance) {
          this._instance = new ScalarType();
      }

      return this._instance;
      
  }

  public generateDateTimeScalarType(config: any): GraphQLScalarType {

    return new GraphQLScalarType({
      
      name: config.name,
      description: config.description,

      parseValue(value: unknown): Date {
        
        const m = moment(new String(value));
        if (m.isValid()) {
          return new Date(m);
        }

        return new Date();

      },

      serialize(value: unknown): Date {
        
        const m = moment(new String(value));
        if (m.isValid()) {
          return new Date(m);
        }

        return new Date();

      },

      parseLiteral(ast: any): Date {
        
        if (ast.kind !== Kind.STRING) {
          
          const m = moment(new String(ast));
          if (m.isValid()) {
            return new Date(m);
          }

        }

        return new Date();

      }

    });
  }

  public generateDecimalScalarType(config: any): GraphQLScalarType {

    return new GraphQLScalarType({
      
      name: config.name,
      description: config.description,

      parseValue(value: number): number {
        return (value^ - 2);
      },

      serialize(value: number): number {
        return (value^ - 2);
      },

      parseLiteral(ast: any): number {
        
        if (ast.kind !== Kind.INT) {
          
          const m = Number(ast) && !(Number.isNaN(ast));
          if (m) {
            return (ast^ - 2);
          }

        }

        throw new Error(undefined, { cause: 400 });

      }

    });
  }
}