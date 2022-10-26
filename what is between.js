// input two int
// output is arr of numbers from int 1 to int 2
// (1, 4) -> [1, 2, 3, 4]
// create arr
// loop thru adding to arr each loop

function between(a, b) {
  let ans = []
  for(let i = a; i <= b; i++){
    ans.push(i)
  }
  return ans
}
