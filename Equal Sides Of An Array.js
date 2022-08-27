// P: arr
// R: return an index or -1 
// E:  findEvenIndex([1,2,3,4,3,2,1]) -> 3
// findEvenIndex([1,100,50,-51,1,1]) -> 1
// findEvenIndex([1,2,3,4,5,6]) -> -1
// P: create loop
// check if sum left = sum right if so return i if not go to next if at the end return -1
// needed to check for arr length that are less then 3

function findEvenIndex(arr){
  if (arr.length < 3){
    if(arr[1] === 0 || arr.length === 1){
      return 0
    } else if(arr[0]===0){
      return 1
    } else {
      return -1
    }
  } else {
    for ( let i = 0; i <= arr.length; i++){
      let leftTotal = 0
      let rightTotal = 0
      let left = []
      let right = []
      if(i === 0){
        right = arr.slice(i+1)
        rightTotal = right.reduce((acc, c) => acc + c)
      } else if(i === arr.length - 1){
        left = arr.slice(0, i)
        leftTotal = left.reduce((acc, c) => acc + c)
      } else {
        right = arr.slice(i+1)
        rightTotal = right.reduce((acc, c) => acc + c)
        left = arr.slice(0, i)
        leftTotal = left.reduce((acc, c) => acc + c)
      }
      if(leftTotal === rightTotal){
        return i
      } else if (i === arr.length - 1){
        return -1
      }
    }
 }
}