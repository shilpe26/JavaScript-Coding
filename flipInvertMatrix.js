// Given a NxN matrix, invert the matrix via rows and also flip it.

const flipInvertMatrix = (matrix) => {

    for(let i = 0; i < matrix.length; i++){
        matrix[i].reverse();
        for(let j = 0; j < matrix[i].length; j++){
            let val = matrix[i][j] === 1 ?  0 :  1;
            matrix[i][j] = val;
            
        }
    }
    return matrix;
}

console.log(flipInvertMatrix([[1,1,0],
                              [1,0,1],
                              [0,0,0]]));


/*
Expected Output:
[[1,0,0],
[0,1,0],
[1,1,1]]
*/