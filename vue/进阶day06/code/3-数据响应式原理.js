const data = {
  name: 'lakers',
  age: 20,
  company: {
    name: '千锋'
  },
  arr: [1,2,3,4]
}

// 数组劫持
const proto = Object.create(Array.prototype)
const arrMethods = ['push','pop','splice','join','slice','shift','unshift','indexOf']
arrMethods.map(item => {
  proto[item] = function () {
     // 给arr添加数组
      Array.prototype.push.call(this,...arguments)
      render(item,...arguments)
  }
})


// 对象拦截函数
function reactive (obj,attr,value) {
  observe(value)
  Object.defineProperty(obj,attr,{
    get () {
      return value
    },
    set (val) {
      // console.log('val',val)
      observe(val)
      render(attr,val)
    }
  })
}


//需要监听数据的函数 
function observe (data) {
  //判断data的类型

    if (Object.prototype.toString.call(data) == "[object Null]") {
      return 
    }
    if (Array.isArray(data)) {
      // 它是一个数组
      data.__proto__ = proto
    }
    // 是一个对象
    if (Object.prototype.toString.call(data) == "[object Object]") {
        for(let key in data) {
          reactive(data,key,data[key])
        }
    } 

}

function render (who,val) {
  console.log(`${who}发生了改变,改变的值是${val}`)
}

observe(data)

data.name = '兵哥'
data.age = 40
data.company.name = '千锋杭州'
data.arr.push(6)
// data.company = {
//   name: '千锋杭州'
// }