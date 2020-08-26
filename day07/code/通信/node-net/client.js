const net = require('net')
const client = new net.Socket()


//! 逐行读取命令
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



client.connect({port: 9000,},() => {
  client.write('欢迎xxx来到我的直播间')
})

client.on('data', msg=> {
  console.log('msg',msg.toString())
  say()
})

client.on('error',error => {
  console.log('err')
})

client.on('close',() => {
  console.log(`正常下线`)
})


function say () {
  rl.question('请输入: ', (answer) => {
    // TODO: Log the answer in a database
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    if (answer == '886') {
      rl.close()
      client.destroy()
    } else {
      client.write(answer)
    }
  });
}