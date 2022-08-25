// P: int
// R: int for how toll pyramid could Be
// E:  [1, 1],
//     [4, 1],
//     [5, 2],
//     [29, 3],
//     [30, 4],
//     [31, 4],
//     [1240, 15]
// P: check n - minus a layer
// is that difference less than how much the next layer would be if so return what layer we are on if not increase the layer 


function pyramidHeight(n, i=1) {
  return n - i**2 < (i+1)**2? i: pyramidHeight(n - i**2, i+1)
}