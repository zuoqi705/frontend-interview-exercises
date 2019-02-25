Function.prototype.bind2 = function (context, ...args1) {
	var func = this;
	return function(...args2) {
		return func.apply(context, [...args1, ...args2])
	}
}


Function.prototype.bind3 = function (context, ...args1) {
	if (typeof this !== "function") {
  		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}
	var func = this;
	var fBound = function (...args2) {
		return func.apply(this instanceof fBound ? this : context, [...args1, ...args2])
	}
	fBound.prototype = Object.create(func.prototype);
	return fBound;
}

var value = 2;

var foo = {
    value: 1
};
// 
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age); 
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind3(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj);
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin