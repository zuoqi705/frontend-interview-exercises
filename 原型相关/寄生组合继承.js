function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'yellow']
}

Parent.prototype.getName = function() {
	console.log(this.name);
}

function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child;

Child.prototype.getAge = function() {
  console.log(this.name)
}

var child1 = new Child('zzq', '18');
var parent1 = new Parent('zsb')
child1.colors.push('black');

console.log('child1', child1)
console.log('parent1', parent1);
child1.getName();
child1.getAge();
console.log(child1.name); // zzq
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]