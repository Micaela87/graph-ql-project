import { DBConfig } from '../types/configs/dbConfig';
import { config } from './config';
import { prisma } from './prisma/prisma';


export class SQLConnection {

    static _instance: InstanceType<typeof SQLConnection> | null = null;
    
    constructor() {}

    static getInstance() {

        if (!this._instance) {
            this._instance = new SQLConnection();
        }

        return this._instance;
    }

    async setConnection() {
        return await prisma.$connect();
    }

    connect = async () => {
        
        try {

            const self = this;
            return await self.setConnection();

        } catch(error) {
            console.error(error);
        }
        

    }
}