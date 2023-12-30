/*
Here we will solve all the question by using Functional Programming only. So points to follow
to solve all the questions are:

1. Immutability - do not change any data always return a new copy.
2. Pure Function - a) have at least one argument
                   b) return a value or other function
                   c) should not mutate any of it's arguments
3. Higher Order Function - Can take functions as an argument or return a function or both.
*/

/* QUES 1 */
/* Given an array. Write a function to change all even numbers in an array to odd numbers 
   by adding 1 to it. */

const arr1 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const arrAllOdd = arr1.map((ele) => ele%2 === 0 ? ele+1 : ele);
console.log(arrAllOdd);

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

/* ----------------------------------------------------------------------------------------- */

/* QUES 2 */
/* Get the names in an array for only those who have a cycle. */

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
];
  

const arrHaveCycle =  family.filter((obj) => obj.haveCycle).map((ele) => ele.name);
console.log(arrHaveCycle);

// Your output should be: ['Tanay', 'Tanvi']
   
/* ----------------------------------------------------------------------------------------- */

/* QUES 3 */
/* Given an array. Write a function that takes in the given array and prints only the 
   numbers which are less than 9 and also an even number. */

const arr2 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const arrEven9 = arr2.filter(ele => ele<9 && ele%2 === 0);
console.log(arrEven9);

// Your output should be: [2, 6, 8, 4]

/* ----------------------------------------------------------------------------------------- */

/* QUES 4 */
/* Given an array. Write a function that takes in the given array and prints only the words which 
   are more than 5 characters in length. */

const arr3 = ['eat', 'sleep', 'repeat', 'code'];
const words = arr3.filter((ele) => ele.length > 5);
console.log(words);

//  Your output should be: ['repeat']

/* ----------------------------------------------------------------------------------------- */

/* QUES 5 */
/* Given an array. Write a function to get the sum of all elements which are greater than 50. */

const arr4 = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumNumbers = (sum, num) => sum+num;
const sum = arr4.filter(ele => ele > 50).reduce(sumNumbers,0);
console.log(sum);

// Your output should be: 190

/* ----------------------------------------------------------------------------------------- */

/* QUES 6 */
/* Given an array. Write a function to get the sum of all elements which are greater than 50. */

const arr5 = [1, 2, 3, 7, 5, 6, 8, 9];

const mulNumbers = (mul, num) => mul*num;
const multiple = arr5.filter(ele => ele%2 === 0).reduce(mulNumbers,1);
console.log(multiple);

// Your output should be: 96

/* ----------------------------------------------------------------------------------------- */

/* QUES 7 */
/* Given an array of objects. Write a function to find the sum of ages of each person. */

const persons = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]


const sumAge = persons.reduce((initial,obj) => obj.age + initial,0);
console.log(sumAge);

// Your output should be: 121 /*** 60+36+16+9 ***/

/* ----------------------------------------------------------------------------------------- */

/* QUES 8 */
/* Given an array. Convert it in to an object with key as the index of each element 
   and value as the element itself. */

const arr6 = ["You", "all", "are", "rockstars"];

const convertToObj = (initial,curr,idx) => ({...initial, [idx]: curr});
const obj = arr6.reduce(convertToObj,{})
console.log(obj);

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

/* ----------------------------------------------------------------------------------------- */

/* QUES 9 */
/* Given an array of objects. If the name of an item is more than 5 characters in length, 
   add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in 
   length, add type as ‘fruit’.  */

const arr7 = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]

const updateObj = obj => {
    let len  = obj?.name?.length;
    if(len>5){
        return {...obj, type: 'vegetable'};
    }else{
        return {...obj, type: 'fruit'};
    }
}

const resultArr = arr7.map(updateObj);
console.log(resultArr);

// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]
   
/* ----------------------------------------------------------------------------------------- */

/* Ques 10 */
/* 
Given an array. Write a function to join all elements of the array with a hyphen in between them.
*/

const arr8 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

const resStr = arr8.reduce((prev,curr) => prev + "-" + curr);
console.log(resStr);

// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

/* ----------------------------------------------------------------------------------------- */

/* Ques 11 */
/* 
Flatten an array without using flat().
*/

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const flatArr = input.reduce((prev,curr)=> [...prev,...curr]);
console.log(flatArr);

// Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

/* ----------------------------------------------------------------------------------------- */

/* Ques 12 */
/* 
Count the occurrences of distinct elements in the given array.
*/

const input1 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const occurrences = ([].concat(...input)).reduce((obj,curr) => {
    obj[curr] = (obj[curr] || 0) + 1;
    return obj;
},{});
console.log(occurrences);

// Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}

/* ----------------------------------------------------------------------------------------- */
