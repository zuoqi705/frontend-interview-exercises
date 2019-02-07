//如何让console.log(a == 1 && a == 2 && a == 3) 运行之后输出 true
var a = {
	val: 1,
	valueOf() {
	  return a.val++;
	}
}

console.log(a == 1 && a == 2 && a == 3 //true