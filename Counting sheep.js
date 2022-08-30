// input arr
// output int
// [true, true, false] -> 2
// filter for true and then take length and return




function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(el => el === true).length
}