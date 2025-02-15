import Express from 'express';
import firebase from './firebase.ts';
import express from './express.ts';
import loggerInstance from './logger.ts'



export default async ( {expressApp}: {expressApp : Express.Application}): Promise<void> => {
    await firebase();
    loggerInstance.info('Connection to databse is successful');
    express({app: expressApp});
    loggerInstance.info('express loaded');
    loggerInstance.info('All moduels loaded');

};