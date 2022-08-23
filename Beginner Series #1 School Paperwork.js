// P: pos int
// R: o or n*m
// E: (paperwork(5,5)--> 25
  // paperwork(5,-5 ---> 0
// P: check if n or m are zer
  // return zero if so and n*m if not



function paperwork(n, m) {
  return(n<0||m<0? 0: n*m)
}