//! 表示导出模块
module.exports = {
  set: function (key, value, days) {
      let d = new Date()
      d.setDate(d.getDate() + days)
      document.cookie = `${key}=${encodeURIComponent(value)};expires=${d};path=/`
  },

  get: function (key) {
      let arr = decodeURIComponent(document.cookie).split('; ')
      for (let i = 0; i < arr.length; i++) {
          let newarr = arr[i].split('=') //['name','zhangsan']数组的第一项是key，第二项是value
          if (key === newarr[0]) {
              return newarr[1]
          }
      }
  },

  remove: function (key) {
      cookie.set(key, '', -1)
  }
}