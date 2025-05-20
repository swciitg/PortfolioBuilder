import express from 'express';
import { login , getToken } from '../Controllers/msAuthController.js';

const authRouter = express.Router();

//  for compatibility with ensureAuthenticated
authRouter.get('/auth/login', login);
// for microsoft login 
authRouter.get('/auth/microsoft', login);
authRouter.get('/auth/microsoft/getToken', getToken);

export default authRouter;
