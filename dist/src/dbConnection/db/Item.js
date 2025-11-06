"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExistingItem = exports.updateExistingItem = exports.createNewItem = void 0;
const scalarTypesConfig_1 = require("../../types/graphqlScalarTypes/scalarTypesConfig");
exports.createNewItem = {
    ActivatedAt: null,
    CreatedAt: new Date(2023, 5, 1, 15, 54, 7, 146),
    DeletedAt: null,
    Description: "Illo consequatur et eligendi optio et vero unde odit.\nRerum aliquam quisquam.",
    IsActive: 0,
    IsDeleted: 0,
    Name: "Sleek Granite Bike",
    Price: scalarTypesConfig_1.decimal.serialize(4.12),
    UpdatedAt: null
};
exports.updateExistingItem = {
    Uuid: "4de86c6a-85c9-4d29-a54e-0af6be55cfbd",
    ActivatedAt: null,
    CreatedAt: new Date(2023, 7, 25, 12, 31, 43, 773),
    DeletedAt: null,
    Description: "Quo facere maiores rerum voluptas.",
    IsActive: 0,
    IsDeleted: 0,
    Name: "Fantastic Cotton Ball",
    Price: scalarTypesConfig_1.decimal.serialize(26.91),
    UpdatedAt: new Date()
};
exports.deleteExistingItem = {
    Uuid: "f6620146-b02a-4bd6-abac-5c27da6f28e8",
    ActivatedAt: null,
    CreatedAt: new Date(2020, 12, 8, 7, 36, 19, 552),
    DeletedAt: new Date(),
    Description: "Sapiente quia perferendis.\nQui doloribus optio.\nEnim aut id non cumque inventore ducimus eum voluptas.\nSint dolores expedita tenetur consequatur molestiae culpa cum quidem suscipit.\nUt quos maxime.",
    IsActive: 0,
    IsDeleted: 1,
    Name: "Handcrafted Wooden Mouse",
    Price: scalarTypesConfig_1.decimal.serialize(10.77),
    UpdatedAt: new Date()
};
