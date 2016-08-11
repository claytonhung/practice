"use strict";

// const polyglot = {
//   name: "Michael Thomas",
//   languages: ["Spanish", "French", "Italian", "German", "Polish"],
//   introduce: function () {
//     const self = this;
//     this.languages.forEach(function(language) {
//       console.log("My name is " + self.name + ", and I speak " + language + ".");
//     });
//   }
// }


// LEXICAL this WITH ARROW FUNCTIONS
const polyglot = {
  name: "Michael Thomas",
  languages: ["Spanish", "French", "Italian", "German", "Polish"],
  introduce: function () {
    this.languages.forEach((language) => {
      console.log("My name is " + this.name + ", and I speak " + language + ".");
    });
  }
}
polyglot.introduce();