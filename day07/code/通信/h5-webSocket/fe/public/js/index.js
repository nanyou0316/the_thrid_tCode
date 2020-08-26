//! 连接服务器
// const socket = new WebSocket(服务器地址)
const socket = new WebSocket('ws://10.31.152.45:5000')
const confirm = document.querySelector('#confirm')
const username = document.querySelector('#username')
const nameBox = document.querySelector('.name-box')
const sendBox = document.querySelector('#send')
const message = document.querySelector('#message')
const ul = document.querySelector('ul')
confirm.onclick = function () {
  if (username.value){
    socket.send(username.value)
    // window.username = username.value
    nameBox.remove()
   } else {
     alert('您需要输入用户名')
   }
  
}

sendBox.onclick = function () {
  const val = message.value
  if (val) {
    //发送
    socket.send(val)
    message.value = ''
    
  socket.onmessage = function (msg) {
    // console.log('msg',msg.data)
    const li = document.createElement('LI')
    li.innerHTML =    msg.data 
    ul.appendChild(li)
  }
  } else {
    alert('请输入您想要发送的弹幕')
  }
}



