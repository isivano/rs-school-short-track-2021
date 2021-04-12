/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  if (matrix.length >= 1) {
    matrix[0].forEach((element) => {
      res += element;
    });
    for (let i = matrix.length - 1; i >= 1; i--) {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        if (matrix[i - 1][j] !== 0 && matrix[i][j] !== 0) res += matrix[i][j];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
