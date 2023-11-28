const findMax = (arr) => {
    let max = Number.MIN_VALUE;
    arr.forEach(ele => {
        if(max < ele){
            max = ele;
        }
    })
    return max;
}

console.log(findMax([1,2,34,4,13,0,-5]));