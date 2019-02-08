//以最小的改动解决以下代码的错误（可以使用es6）

const obj = {
	name: 'jsCoder',
	skill: ['es6', 'react', 'angular'],
	say: function () {
		for(var i = 0, len = this.skill.length; i< len; i++){
			setTimeout(function(){
				console.log('No.' + i + this.name);
				console.log(this.skill[i]);
				console.log('--------------------------');
			}, 0);
			console.log(i);
		}
	}
};
obj.say();

/*
期望得到下面的结果:
1
2
3
No.1 jsCoder
es6
/------------------------
No.2 jsCoder
react
/---------------------------
No. 3 jsCoder
angular
/--------------------------
*/




/*
需要改动两处：
1. 将setTimeout中的函数改为的箭头函数解决this指向问题
2. 将for循环的中的var改为let解决闭包问题 
*/
const obj = {
	name: 'jsCoder',
	skill: ['es6', 'react', 'angular'],
	say: function () {
		for(let i = 0, len = this.skill.length; i< len; i++){
			setTimeout(() => {
				console.log('No.' + i + this.name);
				console.log(this.skill[i]);
				console.log('--------------------------');
			}, 0);
			console.log(i);
		}
	}
};
obj.say();