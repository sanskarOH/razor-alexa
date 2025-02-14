import express from 'express';
import config from './config/index.ts';
import process from 'node:process'
import loader from './utils/loader.ts'




export default async function start() {
    const app = express();
    await loader({app})
    const PORT = config.PORT;
    
    app
    .listen(PORT || 5000 , () => {
        console.log(`----Server listening on PORT ${PORT}----`)
    })
    .on('error', (err : Error) => {
        console.log(err);
        process.exit(1);

    })

}

start();