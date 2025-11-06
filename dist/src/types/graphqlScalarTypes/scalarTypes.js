"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarType = void 0;
const graphql_1 = require("graphql");
const { moment } = require("moment");
class ScalarType {
    static _instance = null;
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ScalarType();
        }
        return this._instance;
    }
    generateDateTimeScalarType(config) {
        return new graphql_1.GraphQLScalarType({
            name: config.name,
            description: config.description,
            parseValue(value) {
                const m = moment(new String(value));
                if (m.isValid()) {
                    return new Date(m);
                }
                return new Date();
            },
            serialize(value) {
                const m = moment(new String(value));
                if (m.isValid()) {
                    return new Date(m);
                }
                return new Date();
            },
            parseLiteral(ast) {
                if (ast.kind !== graphql_1.Kind.STRING) {
                    const m = moment(new String(ast));
                    if (m.isValid()) {
                        return new Date(m);
                    }
                }
                return new Date();
            }
        });
    }
    generateDecimalScalarType(config) {
        return new graphql_1.GraphQLScalarType({
            name: config.name,
            description: config.description,
            parseValue(value) {
                return (value ^ -2);
            },
            serialize(value) {
                return (value ^ -2);
            },
            parseLiteral(ast) {
                if (ast.kind !== graphql_1.Kind.INT) {
                    const m = Number(ast) && !(Number.isNaN(ast));
                    if (m) {
                        return (ast ^ -2);
                    }
                }
                throw new Error(undefined, { cause: 400 });
            }
        });
    }
}
exports.ScalarType = ScalarType;
