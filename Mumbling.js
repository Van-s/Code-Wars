// input str
// output str
// "ZpglnRxqenU" -> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// turn str to arr
// loop thru arr
// loop to create elements of new arr
// make sure first is capitalized and rest are lower
// input the dash
// once at the end return the arr joined

function accum(s) {
	let arr = s.split("")
  let answer = []
  for(let i = 1; i <= arr.length; i++){
    for(let j = 0; j < i; j++){
      if(j === 0){
        answer.push(arr[i-1].toUpperCase())
      } else {
        answer.push(arr[i-1].toLowerCase())
      }
    }
    if(i === arr.length){
      return answer.join('')
    }else {
      answer.push('-')
    }
    
  }
  
}

// able to use map and repeat to shorten

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}