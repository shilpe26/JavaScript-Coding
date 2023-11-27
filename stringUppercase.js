// Convert all the character of given string to uppercase.

const stringUppercase = (str) => {
    let resultString = "";
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if(code >= 97 && code <= 122){
            // if char is lowercase, convert to uppercase
            resultString += String.fromCharCode(code - 32);
        }else{
            // if char is uppercase, use as it is
            resultString += str.charAt(i);
        }
    }
    return resultString;
}

console.log(stringUppercase("javascript"));
console.log(stringUppercase("JavaScript"));
console.log(stringUppercase("Java Script"));