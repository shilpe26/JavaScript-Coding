/*
Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence o
f the characters in the second string. In other words, the function should 
check whether the characters in the first string appear somewhere 
in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

//Solution - Iterative
function isSubsequence1(str1, str2) {
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    
    let i = 0;
    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            i++;
        }
        if(i === str1.length) return true;
    }
    return false;
}

console.log(isSubsequence1('hello', 'hello world'));
console.log(isSubsequence1('abc', 'acb'));

// Solution - Recursive but not O(1) Space
function isSubsequence2(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str1[0] === str2[0]) return isSubsequence2(str1.slice(1), str2.slice(1))  
    return isSubsequence2(str1, str2.slice(1))
}

console.log(isSubsequence2('hello', 'hello world'));
console.log(isSubsequence2('abc', 'acb'));