// test the time it takes for the snippet (function) to run

var totalTime,
  start = new Date,
  iterations = 1000;

while(iterations--) {
  //function placed in here
}

totalTime = new Date - start;
console.log(totalTime);