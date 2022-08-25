// P: array with min of 3 numbers
// R: return int that is only seen once
// E:  findUniq([ 0, 0, 1 ]) -> 1
//   findUniq([ 1, 1, 1, 2, 1, 1 ]) -> 2
//   findUniq([ 1, 1, 2, 1, 1 ]) -> 2
// P: createa holder
// if the holder has another instance return next different value

function findUniq(arr) {
  let holder = arr[0]
    return (arr[1] === holder|| arr [2] === holder)?arr.filter(num => num !== holder)[0]: holder
  }

