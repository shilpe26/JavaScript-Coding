const findMax = (arr) => {
    let max = Number.MIN_VALUE;
    arr.forEach(ele => {
        if(max < ele){
            max = ele;
        }
    })
    return max;
}

const findSecondLargest = (max, arr) => {
    let secondMax = Number.MIN_VALUE;
    arr.forEach(ele => {
        if(secondMax < ele && ele !== max){
            secondMax = ele;
        }
    })
    return secondMax;
}

const arr = [114,2,34,4,13,0,-5];
console.log(findSecondLargest(findMax(arr),arr));