// Return the character at given position in a string.

const characterPosition = (str, pos) => {
    const len = str.length;
    if(pos < 0)
        pos = pos + len;

    if(pos > len)
        pos = pos%len;

    return str.charAt(pos);    
}

console.log(characterPosition("javascript",5));
console.log(characterPosition("javascript",56));
console.log(characterPosition("javascript",-4));