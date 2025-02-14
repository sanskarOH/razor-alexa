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
        



});

const env = envSchema.parse(process.env);
export default {
    PORT : env.PORT,
    firebase_apiKEY : env.firebase_apiKEY,
    authDomain : env.authDomain,
    projectId : env.projectId,
    storageBucket : env.storageBUcket,
    messagingSenderId : env.messagingSenderId,
    appId : env.appId,

    api : {
        prefix : '/api',
    }
}
