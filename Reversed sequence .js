// P: int
// R: arr, starting from n counting down
// E: reverseSeq(5) -> [5, 4, 3, 2, 1]
// P: loop until n=1
// each loop add element

const reverseSeq = n => {
  let arr = []
  for (let i = n; i >0; i--){
    arr.push(i)
  }
  return arr;
};