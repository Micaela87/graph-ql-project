"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const ChildProcess = require('node:child_process');
const exec = ChildProcess.exec;
const fs = require('fs');
// Global middlewares
const errorHandler = (err, req, res, next) => {
    if (err.toString() !== 'uncaughtException') {
        res.status(500).json({
            error: {
                code: err.cause,
                message: err.message
            }
        });
    }
    process.on('uncaughtException', (error) => {
        console.error(error);
        const timer = setTimeout(() => {
            fs.rmdir("./dist");
            process.exit(1);
        }, 1000);
        clearTimeout(timer);
        exec("node ./start.js", (error) => {
            if (error) {
                console.error(error);
                console.error(error.code);
                process.exit(1);
            }
        });
    });
};
exports.errorHandler = errorHandler;
