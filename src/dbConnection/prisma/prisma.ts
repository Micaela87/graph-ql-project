
import { PrismaClient } from '@prisma/client';
import { config } from '../config';
const sql = require("mssql");
const pool = sql.connect(config);
export const prisma = new PrismaClient(pool);