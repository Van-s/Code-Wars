// P: two arrs
// R: -1 first 0 equal 1 second
// E:comparePowers([2,10],[2,15]) -> 1
//   comparePowers([2,10],[3,10]) -> 1
//   comparePowers([2,10],[2,10]) -> 0
//   comparePowers([3,9],[5,6]) -> -1
//   comparePowers([7,7],[5,8]) -> -1
// P: use log to avoid getting numbers that are too large then subtract for the difference
//  compare the result to see if 0 pos or neg

function comparePowers(n1,n2){
  let d = Math.log(n2[0]) * n2[1] - Math.log(n1[0]) * n1[1];
  return (d > 0) - (d < 0);
}