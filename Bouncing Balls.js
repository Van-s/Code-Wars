// input 3 var height greater than zero
// bounce between 1-0 and window less than height
// output if above not met return -1, other wise return int of times ball seen
// bouncingBall(3.0, 0.66, 1.5) -> 3
// bouncingBall(30.0, 0.66, 1.5) -> 15
// first make sure criteria is met, 
// check if new bounce height is passsed window if so run agian with coutn 2
//  if not count 1
//  if h is below window then return count





function bouncingBall(h,  bounce,  window, count=0) {
  if( count === 0 && (h < 0 || bounce <= 0 || bounce >= 1 || window > h)){
    return -1
  } else if (h > window && window > h*bounce){
      return bouncingBall(h*bounce,  bounce,  window, count+1)
  } else if (h > window && window < h*bounce){
      return bouncingBall(h*bounce,  bounce,  window, count+2)
  } else {
     return count
  }
}