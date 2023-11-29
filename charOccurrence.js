// Given a string as input, find the character which has maximum occurrence.

const findMaxOccurChar = (str) => {
    const hash = {};
    let maxCount  = Number.MIN_VALUE, maxChar = '';
    
    for(const char of str){
        hash[char] = (hash[char] || 0) + 1;
    }

    for(let [key, value] of Object.entries(hash)){
        if(value > maxCount){
            maxCount = value;
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(findMaxOccurChar('mimiciary'));