# JS Closures exercises (MVP)

1. In your own terms, define what a Closure is in Javascript

A closure is an inner function that has access to the outer function's variables and global variables in addition to it's own variables

2. What is result?
result = 5;

```
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```

3. What will you see in the console for the following example? Explain Why
I will see 1 in the console because that is what is being logged from the global scope. Function b() doesn't return anything and function a is not a closure.

```
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
```
