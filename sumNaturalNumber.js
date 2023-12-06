// Given a natural number n, Calculate the sum of n natural numbers.

const sumNaturalNum = n => (n*(n+1))/2;

const sumNaturalNum2 = n => {
    let sum = 0;
    for(let i = 1; i <=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNaturalNum(5));
console.log(sumNaturalNum2(5));