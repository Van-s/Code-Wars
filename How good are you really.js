// input -> arr, int
// output -> boolean
// Ex: [100, 40, 34, 57, 29, 72, 57, 88], 75) -> true
// [2, 3], 5) -> true
// avg arr then compare to own points


function betterThanAverage(classPoints, yourPoints) {
  let classAvg = classPoints.reduce((acc, c) => acc + c)/classPoints.length
  return yourPoints > classAvg ? true: false
}