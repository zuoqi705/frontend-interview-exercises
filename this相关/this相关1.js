//实现ES5中Function原型的bind方法，使得以下程序最后输出'success'
Function.prototype.bind2 = function (context, ...args1) {
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

function Animal(name, color){
	this.name = name;
	this.color = color;
}
Animal.prototype.say = function() {
	return `I'm a ${this.color} ${this.name}`;
}
const Cat = Animal.bind2(null,'cat');
const cat = new Cat('white');
if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal){
	console.log('success');
}

