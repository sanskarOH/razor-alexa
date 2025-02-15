import dotenv from 'dotenv';
import process from "node:process";
import { z } from 'zod'

dotenv.config();

const envSchema = z.object({
    PORT : z.string(),
    firebase_apiKEY : z.string(),
    authDomain : z.string(),
    projectId: z.string(),
    storageBucket: z.string(),
    messagingSenderId : z.string(),
    appId : z.string(),
    LOG_LEVEL : z.string(),
    NODE_ENV : z.string(),
        



});

const env = envSchema.parse(process.env);
export default {
    PORT : env.PORT,
    apiKEY : env.firebase_apiKEY,
    authDomain : env.authDomain,
    projectId : env.projectId,
    storageBucket : env.storageBUcket,
    messagingSenderId : env.messagingSenderId,
    appId : env.appId,

    api : {
        prefix : '/api',
    },
    NODE_ENV : env.NODE_ENV,

    logs: {
        level : process.env.LOG_LEVEL || 'silly',
    }
}
