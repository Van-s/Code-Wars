// input -> str
// output -> highest value str in str given
// high('man i need a taxi up to ubud') -> 'taxi'
// high('what time are we climbing up the volcano') -> 'volcano'
// first break string into array of each word
// create holders for value and word
//  loop thru the array of words, 
// find the value of the word and check if it is larger then holder
// update holders when larger
// return holder

function high(x){
  console.log(`${x}`)
  let words = x.split(' ')
  console.log(`${words.length}`)
  let holder = ''
  let num = 0
  for(let i = 0; i < words.length; i++){
    let temp = words[i].split('').reduce((acc,c) =>  acc += (c.charCodeAt(0)-96), 0)
    console.log(` temp: ${temp} num : ${num} holder: ${holder}`)
    if (temp > num){
      holder = words[i]
      num = temp
    }
  }
  return holder
}