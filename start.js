const ChildProcess = require('node:child_process');
const exec = ChildProcess.exec;
const fs = require('fs');

const commands = [
    'tsc --experimentalDecorators --emitDecoratorMetadata',
    'node ./dist/server.js',
    './server.js',
    'cp .env ./dist/.env'
];

function cb(...args) {

    const err = args[0];
    console.log(args);

    if (err) {
        console.error(err);
        console.error(err.code);
        process.exit(1);
    }

}

async function executeNodemonServer(cb, commands) {

    try {

        exec(commands[0], cb);
        exec(commands[1], cb);
        exec(commands[3], cb);

        if (fs.existsSync(commands[2])) {
            fs.rm(commands[2], cb);
        }
        
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

};

executeNodemonServer(cb, commands);
