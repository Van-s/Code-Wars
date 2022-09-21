// input int handshakes
// output int min ppl
// 0 -> 1
// 1 -> 2
// 6 -> 4
// handshakes = n(n-1)/2 loop til find n

function getParticipants(handshakes){
  let n = 0
  while(handshakes*2 > n**2 -n){
    n++
  }
  return n
}