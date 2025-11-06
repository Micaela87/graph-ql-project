"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLConnection = void 0;
const prisma_1 = require("./prisma/prisma");
class SQLConnection {
    static _instance = null;
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new SQLConnection();
        }
        return this._instance;
    }
    async setConnection() {
        return await prisma_1.prisma.$connect();
    }
    connect = async () => {
        try {
            const self = this;
            return await self.setConnection();
        }
        catch (error) {
            console.error(error);
        }
    };
}
exports.SQLConnection = SQLConnection;
