// Reverse the given string.

const reverseString = (str) => {
    const tempArr = str.trim().split(" ");
    let i = 0;
    let j = tempArr.length - 1;
    while(i<j){
        let temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
        i++;
        j--; 
    } 
    return tempArr.join(' ');
}

console.log(reverseString("We are learning javascript"));