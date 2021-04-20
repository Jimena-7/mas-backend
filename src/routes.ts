import {Router} from 'express';
const routes = Router();
routes.get('/users', (request,response) => response.json({
    message: 'Hello Word'
}));
export default routes;
