const rotateNum = (num, rotateBy) => {
    const numLen = num.toString().length;
    const multiplier = 10 ** (numLen-1);
    while(rotateBy>0){
        let rem = num%10;
        num = Math.floor(num/10);
        num = (multiplier*rem) + num;
        rotateBy--;
    }
    return num;
}

console.log(rotateNum(1234,2));