/*
What are closures ?

A closure is the combination of a function and the lexical environment within which that 
function was declared.

In simpler terms, a closure allows a function to remember and access its lexical scope 
even when that function is executing outside its original scope.

*/

function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer function's scope
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // This will print: "I am from the outer function"

// another example
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

var res = x();
res();