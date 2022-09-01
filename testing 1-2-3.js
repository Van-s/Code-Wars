// intput arr
// output add num and : to each element of the array
// ["a", "b", "c"]) -> ["1: a", "2: b", "3: c"]
// create new arr
// loop thru input array and add num and : and put in new arr
// return new arr


var number=function(array){
  let newArr = []
  for(let i = 1; i < array.length + 1; i++){
    newArr[i -1] = i+ ': ' + array[i-1]
  }
  return newArr
}