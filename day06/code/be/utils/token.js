const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const private_key = fs.readFileSync(path.join(__dirname, '../rsa/private_key.pem'))
//生成token
function createToken(payload) {
  return jwt.sign(payload, private_key)
}

//验证token
function checkToken(token) {
  return new Promise((resovle, reject) => {
    jwt.verify(token, private_key, (err, data) => {
      if (err) {
        resovle({
          status: 0,
          msg: 'token验证失败，非法token'
        })
      }
      resovle({
        status: 1,
        msg: 'token验证成功',
        data
      })
    })
  })
}

module.exports = {
  createToken,
  checkToken
}