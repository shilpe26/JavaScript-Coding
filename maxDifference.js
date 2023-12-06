// Given an array, find the maximum difference between two elements in the array.

function findMaxDifference(arr) {
    if (arr.length < 2) {
      return 0; // If the array has less than 2 elements, return 0 as there's no difference
    }
  
    let maxElement = arr[0];
    let minElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
      if (arr[i] < minElement) {
        minElement = arr[i];
      }
    }
  
    return maxElement - minElement;
  }
  
  // Example usage:
  const numbers = [2, 3, 6, 99, 0, 44, 12, -1];
  const maxDiff = findMaxDifference(numbers);
  console.log("Maximum difference:", maxDiff);
  