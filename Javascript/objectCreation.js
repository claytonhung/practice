"use strict";
var Person = Object.create({
  init: function(name) {
    this.name = name;
  },
  do: function(callback) {
    callback.apply(this);
  }
});

var john = new Person('john');
john.do(function() {
  alert(this);
});