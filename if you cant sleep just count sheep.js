// input int
// output str
// countSheep(3) -> "1 sheep...2 sheep...3 sheep..."
// create empty arr
// loop thru til hit the given int
// each time pushing in the count and sheep..

var countSheep = function (num){
  let answer = []
  for(let i = 1; i <= num; i++){
    answer.push(`${i} sheep...`)
  }
  return answer.join('')
}