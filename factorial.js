// input int
// output factorial of input but if less then 0 or bigger then 12 throw exepetion
// (3) -> 6
// create the throw and then return sum if input zero if in correct range recurse thru with one less n and *= sum

function factorial(n, sum=1){
  if (n < 0 || n> 12) {
    throw 'RangeError';
  }
  return n==0? sum: factorial(n-1, sum *= n)
}
