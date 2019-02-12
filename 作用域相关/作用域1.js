var foo = 1;
function fn() {
	if (!foo) {var foo = 10; }
	console.log(foo); //10
}

fn();
console.log(foo); //1




var bar = 1;
function fn() {
	if (!bar) {let bar = 10; }
	console.log(bar); //1
}

fn();
console.log(bar); //1