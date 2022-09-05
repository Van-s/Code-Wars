// input str
// output boolean
// "The quick brown fox jumps over the lazy dog." -> true
// first turn str to arr and turn all lower case for easy checking
// create arr of abcs
// go thru arr and check if they are of the alphabet and if they are nto already scene 
// then check count should be 26 for each letter in alphabet




function isPangram(string){
  let arr = string.toLowerCase().split('')
  let sym = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let final = []
  for(let i = 0; i < arr.length; i++){
    if( sym.includes(arr[i]) && !final.includes(arr[i])){
      final.push(arr[i])
    }
  }
  if (final.length === 26){
    return true
  } else {
    return false
  }
}

// can use the every function for a cleaner answer

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}