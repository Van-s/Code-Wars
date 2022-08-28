// input -> int
// output -> int ---> counter of how persistent
// ex: persistence(39) -> 3
//  persistence(4) -> 0   ----> is zero becuase already single digit
// check if num less then 10 
//  if not perform multiplication of digits
// then run it back thru





function persistence(num, checker = 0) {
  if(num < 10){
    return checker
  } else {
    let temp = String(num).split('')
    let newNum = temp.reduce((acc , c) => acc*c, 1)
    return (persistence(newNum, checker+1))
  }
}