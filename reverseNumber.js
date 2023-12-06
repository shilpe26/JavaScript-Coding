// Given a number num, reverse it.

const reverseNum = num => {
    let reversedNum = 0;
    while(num !== 0){
        let remainder = num%10;
        reversedNum = reversedNum*10 + remainder;
        num = Math.floor(num/10);
    }
    return reversedNum;
}

console.log(reverseNum(123456));