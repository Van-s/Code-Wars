// input three int
// output one int
// 10,5,5 -> 0
// 100,60, 50 -> 10
// first check if there is enough room 
// if so return zero if not return the number left

function enough(cap, on, wait) {
  return cap >= on + wait? 0 : (cap -on - wait)*-1
}