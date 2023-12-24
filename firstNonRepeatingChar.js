/* Find the index of first non-repeating character in the given string. Otherwise
return -1; */

const firstNonRepeatingChar = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
            return i;
        }
    }
    return -1;
}

console.log(firstNonRepeatingChar("hellohellhheell"));
console.log(firstNonRepeatingChar("testing"));
console.log(firstNonRepeatingChar("testingtesting"));