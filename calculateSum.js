// Given string of numbers, Find the sum of all the numbers in string.

const calculateSum = (str) => {
    let sum = 0;
    if(str.length === 0)
        return sum

    for(let num of str){
        sum += Number(num)
    }
    return sum;
}

console.log(calculateSum('1234'));