const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/2005', {
  useNewUrlParser: true
}, err => {
  if (err) throw err
  console.log('数据库连接成功')
})

const fileSchema = new mongoose.Schema({
  file: Buffer
})

const fileModel = mongoose.model('imgs', fileSchema)

module.exports = {
  file: {
    add(data) {
      return new Promise((resolve, reject) => {
        //二进制存储
        const fileEnity = new fileModel(data)
        fileEnity.save(error => {
          if (error) resolve({
            status: 0,
            msg: '存储失败'
          })
          resolve({
            status: 1,
            msg: '存储成功'
          })
        })
      })
    }
  }
}