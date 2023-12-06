/* Given an array, return the most frequent element present in an array. In case of more than one 
most frequent element is found returns the max one. */

const mostFrequent = arr => {
    let mostFrequentElement = Number.MIN_VALUE;
    let maxFrequency = Number.MIN_VALUE;
    
    const arrFrequency = arr.reduce((obj,ele) =>{
        obj[ele] = (obj[ele] || 0) + 1;
        return obj;
    },{})

    Object.entries(arrFrequency).map(([ele,freq]) => {
        if(freq >= maxFrequency && Number(ele) > mostFrequentElement){
            mostFrequentElement = Number(ele);
            maxFrequency = freq;
        }
    })

    return mostFrequentElement;
}

console.log(mostFrequent([1,22,22,22,3,0,5,5,6,6,6,6])); // returns 6, most frequent element
console.log(mostFrequent([22,1,22,22,3,0,5,6,5,3,0,3])); // returns 22, there are two most frequent element so returns the larger one.