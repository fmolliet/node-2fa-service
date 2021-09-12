import { Router } from 'express';

import Controller from './Controller';

const controller = new Controller();

const routes = Router();

routes.post('/verify', controller.verify)
    .post('/token', controller.token)
    .post('/secret', controller.generate);

routes.get('/health', (req, res)=>{ return res.json({status: "UP"}) })

export default routes;