var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)


/**
 * obj是类数组对象，转换成数组的时候会根据length来转换
 * 所以被转换成 [empty,empty]
 * 所以结果为：
 * { '2': 1,
  '3': 2,
  length: 4,
  push: [Function: push] 
  }

 */