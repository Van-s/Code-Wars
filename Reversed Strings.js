// P: str
// R: reversed str
// E: solution('world') -> 'dlrow'
// solution('hello') -> 'olleh'
// P: str to array by split
// .reverse str then join to turn back to str

function solution(str){
  return str.split('').reverse().join('');  
}