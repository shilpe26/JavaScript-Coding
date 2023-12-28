//Check if two given strings are anagram of each other or not?

const checkAnagram1 = (str1,str2) => {
        // Remove spaces and convert strings to lowercase
        str1 = str1.replace(/\s/g, '').toLowerCase();
        str2 = str2.replace(/\s/g, '').toLowerCase();
        
        if (str1.length !== str2.length) {
            return false;
        }
        
        const countStr1 = {};
        const countStr2 = {};
        
        for (let char of str1) {
            countStr1[char] = (countStr1[char] || 0) + 1;
        }
        
        for (let char of str2) {
            countStr2[char] = (countStr2[char] || 0) + 1;
        }
        
        for (let key in countStr1) {
            if (countStr1[key] !== countStr2[key]) {
                return false;
            }
        }
        
        return true;
}

const checkAnagram2 = (str1,str2) => {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

const checkAnagram3 = (str1, str2) =>
{
 
    let NO_OF_CHARS = 256;
    // Create 2 count arrays and initialize
    // all values as 0
    let count1 = new Array(NO_OF_CHARS);
    let count2 = new Array(NO_OF_CHARS);
    for(let i = 0; i < NO_OF_CHARS; i++)
    {
        count1[i] = 0;
        count2[i] = 0;
    }
     
    let i;

    // For each character in input strings,
    // increment count in the corresponding
    // count array
    for (i = 0; i < str1.length && i < str2.length;
         i++) {
        count1[str1[i].charCodeAt(0)]++;
        count2[str2[i].charCodeAt(0)]++;
    }

    // If both strings are of different length.
    // Removing this condition will make the program
    // fail for strings like "aaca" and "aca"
    if (str1.length != str2.length)
        return false;

    // Compare count arrays
    for (i = 0; i < NO_OF_CHARS; i++)
        if (count1[i] != count2[i])
            return false;

    return true;
}

console.log(checkAnagram3("listen","silent"));
console.log(checkAnagram3("arm","gram"));