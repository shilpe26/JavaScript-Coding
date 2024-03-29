const add = (a, b) => a + b;
const multiplyByTwo = x => x * 2;

// Function composition using arrow functions
const addAndMultiplyByTwo = (a, b) => multiplyByTwo(add(a, b));

console.log(addAndMultiplyByTwo(3, 4)); // Output: 14 (3 + 4 = 7, then 7 * 2 = 14)

// Function composition is the process of combining two or more functions to produce a new function.