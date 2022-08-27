// P: two arr
// R: arr of difference
// E: arrayDiff([1,2], [1]) -> [2]
// arrayDiff([1,2,2], []) -> [1,2,2]
// arrayDiff([], [1,2]) -> []
// P: filter first arr by each el in second
//  empty arrays just return a

function arrayDiff(a, b) {
  if(a.length < 1 || b.length < 1){
    return a
  } else {
    let newArr = a
    for (let i = 0; i < b.length; i++){
      console.log(`${i}`)
      newArr = newArr.filter( j => j !== b[i])
    }
    return newArr
  }
}

// improvements would be using has or includes

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}