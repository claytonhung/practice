function clone(original) {
  this.foo = original.foo;
  this.bar = original.bar;
}

var original = {
  foo: 8,
  bar: 7
};

var copy = new clone(original);
console.log(original);
console.log(copy);