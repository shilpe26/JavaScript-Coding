// Reverse each word of given sentence.

const reverseWord = (word) => {
    let reversedWord = "";
    const tempArr = [...word];
    for(let i = tempArr.length - 1; i >= 0; i--){
        reversedWord += tempArr[i];
    }
    return reversedWord;
}

const reverseWordInSentence = (sentence) => {
    const resultantSentence = sentence.trim().split(" ").map(word => reverseWord(word)).join(" ");
    return resultantSentence; 
}

console.log(reverseWordInSentence("Hi we are learning code in JavaScript"));