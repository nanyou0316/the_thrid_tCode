/* 
  * Promise  es6
  * 3个状态，两个过程
    * pending  resolved  rejected 
    * pending => resolved 
    * pending => rejected 
  * api
    * 1. then
    * 2. catch
    * 3. finally
    * 4. all
    * 5. rece    
*/

const p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(1)
  },2000)
})
const p2 = new Promise((resolve,reject) => {
  resolve(2)
})

// p1
//   .then(res=> console.log(res))
//   .catch(err => console.log(err))
//   .finally(() => {
//     console.log('任务已结束')
//   })

//并发执行
Promise.all([p1,p2])
  .then(res=> {
    console.log('res',res) //[1,2]
  })
  .then(data => {
    console.log('data')
  }) 
// Promise.race([p1,p2])
//   .then(res=> {
//     console.log('res',res) //[1,2]
//   })
//   .then(data => {
//     console.log('data')
//   }) 