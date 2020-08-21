const router = require('koa-router')()



/**  
  * @api {post} /api/user/login 用户登录
  * @apiName Login
  * @apiGroup Home
  * @apiParam {string} username 用户名
  * @apiParam {string} password 密码
  * @apiSuccessExample {json} Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "firstname": "John",
  *       "lastname": "Doe"
  *     }
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "error": "UserNotFound"
  *     }
  * @apiSampleRequest http://localhost:3000/api/user/login
*/

const p1 = new Promise((resolve,reject) => {
  resolve('lakers')
})

// p1.then(res => {
//   console.log(res)
// })

router.get('/',  async (ctx, next) => {
  // ctx.request 
  // ctx.response
  const result = await p1
  await ctx.render('index',{
    title: result
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router




