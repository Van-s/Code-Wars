// input str
// output str with spaces before capital letters
// solution('camelCasing') -> 'camel Casing'
// turn str into arr
// loop thru arr for any capitals place a space and skip forward extra index since added one more
// return arr joined back together




function solution(string) {
  let arr = string.split('')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      arr.splice(i,0, ' ')
      i++
    }
  }

  return arr.join('')
}
