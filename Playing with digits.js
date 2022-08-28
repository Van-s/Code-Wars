// input -> int
// output -> int / -1 if none
// ex: digPow(89, 1) -> 1
// digPow(92, 1) -> -1
// get the total with p
// then divide by the number and check for a remainder of zero with modulo





function digPow(n, p){
  let num = String(n).split('')
  let numTotal = 0
  for(let i = 0; i < num.length; i++){
    numTotal += Number(num[i])**(p+i)
  }
  return numTotal%n === 0? numTotal/n : -1
  
}