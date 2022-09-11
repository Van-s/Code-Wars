// input int - volume
// output int
// (4183059834009) -> 2022
// 135440716410000) -> 4824
// check if current n**3 is equal to m the volume
// if so return n
// then check if m is smaller then n**3 if so return -1
// else run thru again with the m updated subtracting n**3
// andupdate n by adding one

function findNb(m, n = 1) {
  if( m === n**3){
    return(n);
  } else if (m < n**3){
    return (-1);
  } else {
    return findNb((m-(n**3)), n+1)
  }
  
}
