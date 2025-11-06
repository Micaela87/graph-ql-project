import { DBConfig } from "../types/configs/dbConfig";
const dotenv = require("dotenv");
dotenv.config();

export const config: DBConfig = {
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
}