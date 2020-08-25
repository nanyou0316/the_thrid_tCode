const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/2005',{useNewUrlParser: true},err => {
  if (err ) throw err  
  console.log('数据库连接成功')
})

// 创建骨架

const userSchema = new mongoose.Schema({
  username: String,
  pass: String,
  phone: String,
  email: String,
  pic: String
})

// 创建模型

const userModel = mongoose.model('users',userSchema)

module.exports = {
  users: {
    register (data) {
      return new Promise(async (resolve,reject) => {
         const {docs} = await this.query()
         if (docs) {
            if (docs.some(item=> item.username == data.username)) {
              resolve({
                status: 2,
                msg: '用户名已存在，请重新输入一个用户名'
              })
            } else {
              const userEntity = new userModel(data)
              userEntity.save(err=> {
                if (!err) resolve({
                  status: 1,
                  msg: '注册成功'
                })
              })
             
            }
         }
      })
    },
    login (data) {
      console.log('data',data)
      const {loginName,pass} = data
      return new Promise(async (resolve,reject) => {
        const {docs} = await this.query()
        userModel.find({username: loginName,pass},(err,doc) => {
          // console.log('doc',doc) 
          if (doc.length != 0) {
            resolve({
              status: 1,
              msg: '登录成功', 
              pic: doc[0].pic
            })
          } else {
            userModel.find({email: loginName,pass},(err,docs) => {
              if (docs.length !=0){
                resolve({
                  status: 1,
                  msg: '登录成功', 
                  pic: docs[0].pic
                })
              } else {
                resolve({
                  status: 0,
                  msg: '用户名或密码错误，请重试'
                })
              }
            })
          }

        })
      })
    },
    getUserInfo () {},
    delUser () {},
    sealUser () {},
    query () {
      return new Promise((resolve,reject) => {
        userModel.find({},(error,docs) => {
          if (error) reject({
            status: 0,
            msg: '查询失败'
          })
          resolve({
            status: 1,
            msg: '查询成功',
            docs
          })
        })
      })
    }
  }
}