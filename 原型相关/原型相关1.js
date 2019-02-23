function Women(name){
	this.name = name;
}

function Men(name){
	this.name = 'yy1';
}

Object.defineProperty(Women, 'name', {
	configurable:true,
	enumerable:true,
	set:function(){
		name = 'yy2';
	},
	get:function(){
		return 'yy3';
	}
})

Women.prototype = new Men();
var a = new Women();
var b = new Men();

//问下面的分别输出什么
console.log(Women.name); //yy3
console.log(Men.name); //Men
console.log(a.name); //undefined
console.log(b.name); //yy1