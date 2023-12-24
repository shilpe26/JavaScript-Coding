// Given two string, check if one string is shifted version of other or not.

const matchShiftString = (str1, str2) => {
    for(let i = 0; i < str1.length; i++){
        if(str1 === str2){
            return true;
        }
        let firstChar = str1.slice(0,1);
        str1 = str1.slice(1) + firstChar;
    }
    return false;
}

console.log(matchShiftString("xyza","zaxy"));