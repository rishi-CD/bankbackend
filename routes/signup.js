import express, {Router} from 'express';
import { register, login } from '../controllers/loginAndRegister.js';

const route = Router();
route.post('/register', register)
route.get('/login/:customerId', login)


export {route as route};
