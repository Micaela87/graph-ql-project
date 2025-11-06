"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimal = exports.date = void 0;
const scalarTypes_1 = require("./scalarTypes");
const scalar = new scalarTypes_1.ScalarType();
const dateConfig = {
    name: "DateTime",
    description: "Generates GraphQL Scalar Type with moment.js"
};
exports.date = scalar.generateDateTimeScalarType(dateConfig);
const decimalConfig = {
    name: 'Decimal',
    description: "Generates GraphQL Scalar Type with math calculations"
};
exports.decimal = scalar.generateDecimalScalarType(decimalConfig);
