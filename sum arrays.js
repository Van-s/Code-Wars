// input arr
// output int
// 1, 2, 3 -> 6
// use reduce to sum arr, if empty return zero

function sum(numbers){
  return numbers.length > 0 ? numbers.reduce( (e, c )=> e+ c ): 0
};