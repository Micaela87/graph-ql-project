"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    server: 'localhost',
    port: 1433,
    database: process.env.DB_NAME || "Shop",
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PWD || "Pa$$w0rd",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
        trustedConnection: true,
    },
};
