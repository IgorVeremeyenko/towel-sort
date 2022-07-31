
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) return arr;
  for(let i = 0; i < matrix.length; i++){
    let size = matrix[i].length;
    if(i % 2 != 0){
      for(let j = size - 1; j >= 0; j--){
        arr.push(matrix[i][j]);
      }
    }
    else {
      for(let k = 0; k < size; k++){
        arr.push(matrix[i][k]);
      }
    }
  }
 
  return arr;
}
