/*
请你自己尝试实现一下race()函数来模拟Promise.race()方法；
其中Promise.race()有以下特点：
1. 接收一个数组作为参数，
   一旦数组中的某个promise解决或者拒绝，
   返回的promise就会解决或拒绝。
2. 返回promise后，剩下的promise继续执行
*/

var p1 = new Promise((resolve, reject) => { 
	setTimeout(function () {
		console.log('p1');
		resolve('resolve p1');
	}, 100);
});

var p2 = new Promise( (resolve, reject) => { 
	setTimeout(function () {
		console.log('p2');
		resolve('resolve p2');
	}, 3000);
});

// Promise.race([p1, p2]).then( res => {
//   console.log(res); // "resolve p1"
//   // 两个都完成，但 p1 更快
// });


const race = arr => {
	return new Promise( (resolve, reject) => {
		arr.forEach( v => {
			//直接将resolve和reject方法传过去
			Promise.resolve(v).then(resolve, reject);
		})
	})
}

race([p1, p2]).then( res => {
  console.log(res);
}).catch(err => {
	console.log(err)
});

/*
期待结果
p1
resolve p1
p2
[Finished in 3.1s]
*/