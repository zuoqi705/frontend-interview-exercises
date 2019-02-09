/*
请你自己尝试实现一下all()函数来模拟Promise.all()方法；
其中Promise.all()有以下特点：
1. 接收一个 Promise 实例的数组
2. 如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
3. 数组中多个 promise 是同时开始、并行执行的，而不是顺序执行
4. 如果全部成功，状态变为 resolved，返回值将将按传入的数组顺序组成一个数组传给回调
5. 只要有一个失败，状态就变为 rejected，返回值将直接传递给回调
6. 返回值也是新的 Promise 对象
*/


const p1 = new Promise( (resolve,reject) => {
	setTimeout(resolve, 3000, 'p1');
})

const p2 = new Promise( (resolve, reject) => {
	setTimeout(resolve, 2000, 'p2');
})

const p3 = new Promise( (resolve, reject) => {
	setTimeout(resolve, 1000, 'p3');
})

// Promise.all([p1, p2, p3]).then(res => {
// 	console.log('res:', res)
// }).catch(err => {
// 	console.log('error:', err)
// })


/*
实现难点：
1. 并行处理
2. 返回结果处理
*/
const all = arr => {
	var resArr = []; //结果数组
	var cnt = 0; //用于判断是否遍历完
	return new Promise( (resolve, reject) => {
		arr.forEach( (v, i) => {
			//当传入的不是Promise对象时要包裹成Promise对象
			Promise.resolve(v).then( res => { 
				resArr[i] = res;
				cnt++;
				if(cnt === arr.length) { //如果遍历完再resolve
					resolve(resArr);
				}
			}).catch(err => { //捕获到错误直接返回reject状态
				reject(err);
			})
		} )
	})
}

all([1, p1, p2, p3]).then(res => {
	console.log('res:', res)
}).catch(err => {
	console.log('error:', err)
})

/*
期待返回结果：
res: [ 1, 'p1', 'p2', 'p3' ]
[Finished in 3.1s]
*/