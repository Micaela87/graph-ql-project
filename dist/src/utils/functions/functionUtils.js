"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payloadValidation = exports.processGraphQLPayload = void 0;
const Item_1 = require("../../types/payloads/Item");
const moment = require('moment');
const processGraphQLPayload = (payload, res) => {
    const query = payload["query"];
    const operationName = payload["operationName"];
    const operation = query.replace(operationName, "");
    const data = payload["variables"]["input"];
    const graphQLPayload = new Item_1.ItemPayload().createItemPayload();
    res.json({ data: graphQLPayload });
};
exports.processGraphQLPayload = processGraphQLPayload;
const payloadValidation = (payload, action) => {
    payload["CreatedAt"] = !(payload["CreatedAt"]) ? moment().format() : payload["CreatedAt"];
    payload["ActivatedAt"] = (payload["IsActive"] && !(payload["ActivatedAt"])) ? moment().format() : payload["ActivatedAt"];
    payload["IsActive"] = (!(payload["IsActive"]) && payload["ActivatedAt"]) ? 1 : 0;
    payload["DeletedAt"] = (payload["IsDeleted"] && !(payload["DeletedAt"])) ? moment().format() : payload["DeletedAt"];
    payload["IsDeleted"] = (!(payload["IsDeleted"]) && payload["DeletedAt"]) ? 1 : 0;
    if (payload["IsActive"] && payload["IsDeleted"]) {
        payload["IsDeleted"] = 0;
        payload["DeletedAt"] = null;
    }
    switch (action) {
        case "update":
            payload["UpdatedAt"] = !payload["UpdatedAt"] ? moment().format() : payload["UpdatedAt"];
            return payload;
        case "delete":
            payload["DeletedAt"] = !payload["DeletedAt"] ? moment().format() : payload["DeletedAt"];
            payload["IsDeleted"] = 1;
            payload["IsActive"] = 0;
            payload["ActivatedAt"] = null;
            payload["UpdatedAt"] = null;
            return payload;
    }
    return payload;
};
exports.payloadValidation = payloadValidation;
