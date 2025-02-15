import {initializeApp , type FirebaseApp } from 'firebase/app'
import config from "../config/index.ts"



const firebaseConfig = {
    apiKey : config.apiKEY,
    authDomain : config.authDomain,
    projectId : config.projectId,
    storageBucket : config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
}

let firebaseApp : FirebaseApp | null = null;


export default async function initializeClient(): Promise<FirebaseApp>  {
    if (!firebaseApp){
        firebaseApp =  await initializeApp(firebaseConfig);

    }
    return firebaseApp;
};

