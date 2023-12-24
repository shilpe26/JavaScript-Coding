const reverseVowelInString = (str) => {
    let left = 0;
    let right = str.length - 1;
    let strArr = str.trim().split('');
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];

    while(left < right){
        if(!vowels.includes(strArr[left])){
            left++;
        }
        if(!vowels.includes(strArr[right])){
            right--;
        }
        if(vowels.includes(strArr[right]) && vowels.includes(strArr[left])){
            let temp = strArr[left];
            strArr[left] = strArr[right];
            strArr[right] = temp;
            left++;
            right--;
        }
    }

    return strArr.join('');
}

console.log(reverseVowelInString("newGeneration"));