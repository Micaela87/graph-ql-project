import { Response } from "express";
import { GraphQLReqBody } from "../../types/payloads/mutationGraphQLPayload";
import { ItemPayload } from "../../types/payloads/Item";
import { CreateItemDTO } from "../../dbConnection/db/DTO/Item/createItemDTO";
import { UpdateItemDTO } from "../../dbConnection/db/DTO/Item/updateItemDTO";
import { DeleteItemDTO } from "../../dbConnection/db/DTO/Item/deleteItemDTO";
const moment = require('moment');

export const processGraphQLPayload = (payload: GraphQLReqBody, res: Response) => {

    const query = payload["query"];
    const operationName = payload["operationName"];
    const operation = query.replace(operationName, "");
    const data = payload["variables"]["input"];

    const graphQLPayload = new ItemPayload().createItemPayload();

    res.json({ data: graphQLPayload });
}

export const payloadValidation = (
    payload: CreateItemDTO | UpdateItemDTO | DeleteItemDTO,
    action: string
): any => {

    payload["CreatedAt"] = !(payload["CreatedAt"]) ? moment().format() : payload["CreatedAt"];

    payload["ActivatedAt"] = (payload["IsActive"] && !(payload["ActivatedAt"])) ? moment().format() : payload["ActivatedAt"];
    payload["IsActive"] = (!(payload["IsActive"]) && payload["ActivatedAt"]) ? 1 : 0;

    payload["DeletedAt"] = (payload["IsDeleted"] && !(payload["DeletedAt"])) ? moment().format() : payload["DeletedAt"];
    payload["IsDeleted"] = (!(payload["IsDeleted"]) && payload["DeletedAt"]) ? 1 : 0;
        
    if (payload["IsActive"] && payload["IsDeleted"]) {
        
        payload["IsDeleted"] = 0;
        payload["DeletedAt"] = null;

    }

    switch(action) {

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
}