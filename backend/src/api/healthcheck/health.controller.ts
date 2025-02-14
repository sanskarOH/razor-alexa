import {Router} from 'express'
import process from  "node:process"


export default (): Router => {
    const app = Router();
    app.get('/healthcheck' , (req,res) => {
        const helathcheck = {
            uptime : process.uptime(),
            message : "OK",
            timestamp: Date.now(),
        };
        try{
            return res.status(200).json(helathcheck)
        }
        catch(e){
            return res.status(503).send(e);
        }

    })
    return app;

}