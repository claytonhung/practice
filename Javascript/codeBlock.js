"use strict";

// IIFE = Immediate Invoked Function Expression
// IIFE makes the function run right away
// (function name() {
//
// })();

var foo = "foo";
(function test() {
  if (foo) {
    var bar = "bar";
    let foobar = foo + bar;
  }

  console.log(foo); // foo
  console.log(bar); // bar
  // console.log(foobar); // undefined because foobar can only be found in the if statement
})();

// test();