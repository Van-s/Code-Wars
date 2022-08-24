// P: str 
// R: str of middle char or two if even
// E: getMiddle("test") -> "es"
//   getMiddle("testing") -> "t"
// P: check len of str if odd 
//   if odd return len/2 rounded up
//   if even return len/2 and len/2 -1

function getMiddle(s){
  return s.length%2 === 0? s.slice(s.length/2 -1, s.length/2); s[Math.ceil(s.length/2)]
}