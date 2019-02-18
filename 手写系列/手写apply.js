Function.prototype.apply2 = function(context) {
	var context = context || window;
	context.fn = this;
	var res;
	if(arguments[1]) {
		res = context.fn(...arguments[1])
	} else {
		res = context.fn;
	}
	delete context.fn;
	return res;
}