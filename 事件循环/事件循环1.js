/*
promise1
script start
script end
then1
timeout1
timeout2
*/

setTimeout(function() {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
    console.log('promise1');
    resolve();
    setTimeout(() => console.log('timeout2'), 10);
	}).then(function() {
    console.log('then1')
})

console.log('script start');
// console.log('script end');