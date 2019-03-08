function createIterator(items) {
  var i = 0;
  return {
    next() {
      var done = (i >= items.length);
      var value = !done ? items[i++] : undefined;
      return {done, value};
    }
  }
}
var iterator = createIterator([1,2,3]);
console.log(iterator.next()); //"{value: 1, done: false}"
console.log(iterator.next()); //"{value: 2, done: false}"
console.log(iterator.next()); //"{value: 3, done: false}"
console.log(iterator.next()); //"{value: undefined, done: false}"
console.log(iterator.next()); //"{value: undefined, done: false}"
