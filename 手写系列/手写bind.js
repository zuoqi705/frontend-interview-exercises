Function.prototype.bind2 = function (context, ...args1) {
	var func = this;
	return function(...args2) {
		return func.apply(context, [...args1, ...args2])
	}
}


var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18