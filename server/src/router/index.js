import Router from 'koa-router';
const send = require('koa-send');
const path = require('path');
import user from './user';
const log = require('log4js').getLogger('router/index');

const rt = new Router();

rt.get('/app', async ctx=>{
	log.info('第一个页面');
	console.log(path.join(process.cwd(),'/public/1.txt'))
    ctx.body = '第一个页面';
})

/*
*图片下载
*/
rt.get('/download',async ctx=>{
    console.log(11)
    var filename = '1.txt';
    ctx.attachment(filename);
    console.log(__dirname)
    await send(ctx, filename, { root:path.join(process.cwd(),'/public/1.txt') });
})

rt.use('/user',user.routes());

export default rt;