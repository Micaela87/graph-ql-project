const ChildProcess = require('node:child_process');
const exec = ChildProcess.exec;
const fs = require('fs');

import { NextFunction, Request, Response } from "express";

// Global middlewares
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    
    if (err.toString() !== 'uncaughtException') {

        res.status(500).json({
            error: {
                code: err.cause,
                message: err.message
            }
        });

    }    
        
    process.on('uncaughtException', (error: Error) => {
        
        console.error(error);
        
        const timer = setTimeout(() => {
            fs.rmdir("./dist");
            process.exit(1);
        }, 1000);

        clearTimeout(timer);

        exec("node ./start.js", (error: any) => {

            if (error) {
                console.error(error);
                console.error(error.code);
                process.exit(1);
            }
        });
    });
}