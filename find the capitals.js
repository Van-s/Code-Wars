// input str with random captials
// output arr of ints with locations of captials
// 'CodEWaRs' -> [0,3,4,6] 
// create arr to hold
// turn str to arr
// loop thru arr and check if capital if so push into arr

var capitals = function (word) {
	let count = []
  let words = word.split('')
  for(let i = 0; i < words.length; i++){
    if(words[i] !== words[i].toLowerCase()){
      count.push(i)
    }
  }
  return count
};