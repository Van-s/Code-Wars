// input arr
// output arr with odds sorted
// sortArray([5, 3, 2, 8, 1, 4]) -> [1, 3, 2, 8, 5, 4]
// sortArray([5, 3, 1, 8, 0]) -> [1, 3, 5, 8, 0]
// create arr of only the odd numbers, and sort them
// create new arr to change
// check if number is off if it is replace it with on that is in order
//  remove the number used
// return new arr



function sortArray(array) {
  let temp = array.filter(x => x%2 != 0).sort(function(a, b) {return a-b})
  let newArr = array
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] %2 !== 0){
      newArr[i] = temp[0]
      temp.shift()
    }
  }
  return newArr
}