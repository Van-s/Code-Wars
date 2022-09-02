// input two arr
// output boolean
// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// first return false for any null or empty as per instruction
// create new arr of square roots of array 2
//  compare to arr1 and see if they are equal if so return true else false

function comp(array1, array2){
  if(array1 === [] || array2 === [] || array1 === null || array2 === null){
    return false
  } else {
  let arr = []
  for(let i = 0; i < array2.length; i++){
    arr.push(Math.sqrt(array2[i]))
  }
  return arr.sort().every((val, index) => val === array1.sort()[index])
  }

}
