// Replace character in given string with the new character.

const replaceChar = (str, oldChar, newChar) => {
    let resultantString = "";
    for(let  i = 0; i < str.length; i++){
        if(oldChar === str.charAt(i)){
            resultantString += newChar;
        }else{
            resultantString += str.charAt(i);
        }
    }
    return resultantString;
}

console.log(replaceChar("javascript","a","b"));