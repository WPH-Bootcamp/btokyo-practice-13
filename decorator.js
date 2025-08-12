function callback(args) {
    console.log('This is a function that does something.');
}

function logger(fn) {
  return function(...args) {
    console.log(args);
    return fn(...args);
  }
}

logger(callback)(1, 2, 3);