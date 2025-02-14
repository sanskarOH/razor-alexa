import { Router } from 'express';
import testController from './test/test.controller.ts';
import healthController from './healthcheck/health.controller.ts';

export default (): Router =>{
    const app = Router();
    app.use('/test', testController());
    app.use(healthController())
    return app;

}