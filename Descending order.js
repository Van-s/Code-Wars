// input int
// output int
// (0) -> 0
// (123456789) -> 987654321
// turn int into str to split it
// then sort the arr, reverse it and join it and turn it back to number

function descendingOrder(n){
  let an = n.toString().split("")
  return Number(an.sort().reverse().join(''))
}