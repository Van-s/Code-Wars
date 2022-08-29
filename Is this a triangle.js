// input 3 ints
// output boolean
// isTriangle(1,2,2) -> true
// isTriangle(7,2,2) -> false
// check each side to be less than sum of other two


function isTriangle(a,b,c){
  return a < c + b && b < a + c && c < a + b ? true : false 
}