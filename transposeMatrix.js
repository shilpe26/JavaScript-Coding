/*
Given a NxN matrix, write a program to Transpose it.
*/

const transposeMatrix = (matrix) => {
    let n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

console.log(transposeMatrix([[1,2,3],
                             [4,5,6],
                             [7,8,9]]));


/*
Expected Output:
[[1,4,7],
 [2,5,8],
 [3,6,9]]
 */