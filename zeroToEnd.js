/* Given an array of numbers containing zero. Write a program to shift all the zero of array
to its end. */

const zeroToEnd = (arr) => {
    let resultArr = [];
    for(let ele of arr){
        if(ele !== 0){
            resultArr.push(ele)
        }
    }
    let remainingLen = arr.length - resultArr.length;
    while(remainingLen !== 0){
        resultArr.push(0);
        remainingLen--;
    }

    return resultArr;
}

console.log(zeroToEnd([2,0,4,3,0,1,0,9,-1]));