function rotateMatrix(matrix) {
    const N = matrix.length;
    
    for (let i = 0; i < N; i++) {
      for (let j = i; j < N; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    
    matrix.forEach(row => row.reverse());
    return matrix;
  }
  
  
module.exports = rotateMatrix;

   