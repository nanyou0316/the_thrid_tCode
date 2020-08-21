const router = require('koa-router')()

router.prefix('/api/user') // http://localhost:3000/api/user/login

/**  
  * @api {post} /api/user/login 用户登录
  * @apiName Login
  * @apiGroup User
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

router.post('/login', async ctx => {
  console.log(ctx.request.body)
  /* 
    * 我们通过ctx.request.body 来接收前端post请求携带过来的数据
  */
  await ctx.render('login', {
    data: JSON.stringify({
      status: 1,
      msg: '登录成功',
      userId: '007',
      token: 'sajdsajflijasdlkfjslajdfl;sjafl;kjdslk',
      root: 0  // 0表示普通用户，1表示管理员   2 表示超级管理员
    })
  })
})

module.exports = router 