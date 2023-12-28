// Check if given string is Pallindrome or not. (Reverse of string must be equal to original string)

const stringPallindrome = (str) => {
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(stringPallindrome("mom")); // true
console.log(stringPallindrome("hello")); // false