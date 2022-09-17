// input str
// output array
// "codewars" -> ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
// first create empty arr
// skip over white space
// then captilize each letter starting from the front and then push into arr and then move on to next

function wave(str){
  let answer = []
  for(let i = 0; i < str.length;i++){
    let temp = str.split('')
    if(temp[i] === ' ' && str.length > 1){
    } else {
      temp[i] = temp[i].toUpperCase()
      console.log(temp[i])
      answer.push(temp.join(''))
    }
  }
  return answer
}