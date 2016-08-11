const fetch = require('node-fetch')
// const co = require('co')

// Promises
// fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then( response => response.json()) // callback (response)
//   .then( post => post.title) // passes the title
//   .then( x => console.log('Title:', x))

// Generators have a *
// Yield = takes the promise returned from fetch, gives it to co fcn
// co fcn will take the promise, resolve it and pass resolve value back to response fcn
// co(function *() {
//   const uri = 'http://jsonplaceholder.typicode.com/posts/1';
//   const response = yield fetch(uri);
//   const post = yield response.json();
//   const title = post.title;
//   console.log(title);
// })

run(function *() {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1';
  const response = yield fetch(uri);
  const post = yield response.json();
  const title = post.title;
  console.log(title);
})
.then(x => console.log(x))
.catch(error => console.log(error.stack))

// this run generator function only works for 2 lines
function run(generator) {
  const iterator = generator();
  const iteration = iterator.next();
  const promise = iteration.value;
  promise.then( response => {
    const anotherIterator = iterator.next(response);
    const anotherPromise = anotherIterator.value;
    anotherPromise.then( post => iterator.next(post))
  })
}


// Recursively iterate for generators
function runn(generator) {
  const iterator = generator();
  const iteration = iterator.next();

  function iterate (iteration) {
    //base case
    if(iteration.done)
      return iteration.value;
    const promise = iteration.value;
    return promise.then( x => iterate(iterator.next(x)))
  }
  return iterate(iteration);
}