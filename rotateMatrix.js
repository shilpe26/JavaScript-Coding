// Given a NxN matrix, rotate it one time in clockwise direction.

const rotateMatrix = (matrix) => {
    let n = matrix.length - 1;
    const result = matrix.map((row,i) => row.map((val,j) => matrix[n-j][i]));
    return result;
}

console.log(rotateMatrix([[1,2,3],
                          [4,5,6],
                          [7,8,9]]));


/*
Expected Output:
[[7,4,1],
[8,5,2],
[9,6,3]]
*/