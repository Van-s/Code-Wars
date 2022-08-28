// input -> str
// return value -> int
// ex: duplicateCount("abcde"), 0
// duplicateCount("aabbcde"), 2 a,b

function duplicateCount(text){
  let arr = text.toLowerCase().split('')
  let num = arr.length
  let temp = arr
  let count = 0
  for(let i = 0; i < arr.length; i++){
    temp = temp.filter(ob => ob !== arr[i])
    if(num - temp.length > 1){
      count++
      num = temp.length
    } else {
      num = temp.length
    }
  }
  return count
  
}

