
// DELETE is bad as it removes the variables
var o = {x:1};
// delete o.x;
// console.log(o.x);


// CLOSURES: fcn that returns an inner function
// CLOSURES: inner fcn have access to outer fcn even aftr outer fcn is executed

function sum(x) {
  function sumIt(y){
    return (x+y);
  }
  return sumIt;

var sumA = sum(4);
console.log(sumA);
var sumB = sumA(3);
console.log(sumB);

var b = function() {
  var largeStr = new Array(10).join('x');
  return function() {
    return largeStr;
  }
}();

// BEST METHOD FOR CLOSURES: cant access largeStr, thus it can be garbage collected
var a = function() {
  var smallStr = 'x';
  var largeStr = new Array(10).join(smallStr);
  return function(n) {
    return smallStr;
  }
}();

console.log(b());
console.log(a());



