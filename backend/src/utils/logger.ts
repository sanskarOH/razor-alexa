import winston from 'winston'
import config from '../config/index.ts'

const transports = [];
if(config.NODE_ENV !== 'development'){
    transports.push(new winston.transports.Console());
}else{
    transports.push(
        new winston.transports.Console({
            format : winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            ),
        }),
    );
}
const loggerInstance = winston.createLogger({
    level : config.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({stack : true}),
        winston.format.json(),
        winston.format.splat(),
     
    ),
    transports


});

export default loggerInstance;