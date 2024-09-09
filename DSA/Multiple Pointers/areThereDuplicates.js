// Using Frequency Counter
function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// Using Multiple Pointers
function areThereDuplicates2(...args) {
    args.sort((a, b) => a-b);
   
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
}

// One Liner Solution
function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(2,1,2));
console.log(areThereDuplicates1(1,2,8));
console.log(areThereDuplicates1(3,2));

console.log(areThereDuplicates2(2,1,2));
console.log(areThereDuplicates2(1,2,8));
console.log(areThereDuplicates2(3,2));

console.log(areThereDuplicates3(2,1,2));
console.log(areThereDuplicates3(1,2,8));
console.log(areThereDuplicates3(3,2));