//1. 引入需要的第三方库
const mongoose = require('mongoose')

//2. 连接数据库
mongoose.connect('mongodb://localhost:27017/2005', {
  useNewUrlParser: true
}, error => {
  if (error) throw error
  console.log('数据库连接成功')
})

//3. 创建骨架 ---> 实质就是在做数据库的字段定义
const shopSchema = new mongoose.Schema({
  shopId: String,
  shopTitle: String,
  shopDesc: String,
  shopNum: String,
  shopPrice: String,
  shopName: String,
  shopPic: String
})

//4. 创建模型
// mongoose.model(集合名称【复数】，骨架)
const shopModel = mongoose.model('shops', shopSchema)


module.exports = {
  shop: {
    add(data) {
      return new Promise(async (resolve, reject) => {
        const docs = await this.query()
        const f = docs.data.some(item => item.shopId == data.shopId)
        if (f) {
          // 找到了
          resolve({
            status: 2,
            msg: '商品已添加，请勿重复添加'
          })
        } else {
          // 没有找到
          const shopEnity = new shopModel(data)
          shopEnity.save()
          resolve({
            status: 1,
            msg: '添加成功'
          })
        }
      })
    },
    del(_id) {
      return new Promise((resolve, reject) => {
        shopModel.findById(_id, (error, doc) => {
          // console.log('doc',doc) 就是_id的这条数据
          if (error) reject({
            status: 0,
            msg: '删除失败'
          })
          doc.remove()
          resolve({
            status: 1,
            msg: '删除成功'
          })
        })
      })
    },
    update(data) {
      console.log('data', data)
      const { _id } = data
      return new Promise((resolve, reject) => {
        shopModel.findById(_id, (error, doc) => {
          if (error) reject({
            status: 0,
            msg: '修改失败了'
          })
          // console.log('doc',doc)
          for (let key in data) {
            doc[key] = data[key]
          }
          doc.save(async (err) => {
            resolve({
              status: 1,
              msg: '修改成功',
              data: await this.query()
            })
          })
        })
      })
    },
    query() {
      return new Promise((resolve, reject) => {
        shopModel.find({}, (error, docs) => {
          if (error) {
            reject({
              status: 0,
              msg: '查询失败'
            })
          } else {
            resolve({
              status: 1,
              msg: '查询成功',
              data: docs
            })
          }
        })
      })
    }
  }
}