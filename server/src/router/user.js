import Router from 'koa-router';
import UserLogic from '../logic/user.js';
const rt = new Router();

rt.post('/api/register',UserLogic.Register);
rt.post('/api/login',UserLogic.Login);
rt.get('/api/getaddress',UserLogic.GetAddress);

export default rt;