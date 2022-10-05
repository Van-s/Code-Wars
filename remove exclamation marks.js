// input str
// output str without !
// hello! ---> hello
// turn str to arr and then loop thru replacing ! -> ''

function removeExclamationMarks(s) {
  let letters = s.split('')
  for(let i =0; i < letters.length; i++){
    if(letters[i] === "!"){
      letters[i] = ''
    }
  }
  return letters.join('')
}
