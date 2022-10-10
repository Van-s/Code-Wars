// input str or arr of random letters/numbers
// output an arr of letters/numbers wihtout duplicates in a row
// ('AAAABBBCCDAABBB') -> ['A','B','C','D','A','B']
// create arr to hold and a holder element to check for duplicates
// turn strs into arr
// loop thru each element if its different change holder if its the same skip over

var uniqueInOrder=function(iterable){
  let letters = []
  if(typeof iterable === "string"){
    letters = iterable.split('')
  }else {
    letters = iterable
  }
  
  let hold = ''
  let ans = []
  for(let i = 0; i < letters.length; i++){
    if(hold === letters[i]){
      
    } else {
      hold = letters[i]
      ans.push(letters[i])
    }
  }
  return ans
}
