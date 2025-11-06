import { ScalarType } from "./scalarTypes";

const scalar = new ScalarType();

const dateConfig = {
    name: "DateTime",
    description: "Generates GraphQL Scalar Type with moment.js"
};
export const date = scalar.generateDateTimeScalarType(dateConfig);

const decimalConfig = {
    name: 'Decimal',
    description: "Generates GraphQL Scalar Type with math calculations"
};
export const decimal = scalar.generateDecimalScalarType(decimalConfig);