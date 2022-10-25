// input str
// output str with words put in reverse order
//'I am an expert at this' -> 'this at expert an am I'
// turn str to arr
// reverse order and turn back to string

function reverse(string){
  return string.split(' ').reverse().join(' ')
}
