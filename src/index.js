
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return  (matrix == null)? [] : matrix.map((item, i, arr) => (i % 2 == 0) ? item : item.reverse()).flat();
}
