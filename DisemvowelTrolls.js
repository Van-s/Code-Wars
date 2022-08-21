//p:str
//r: str without vowels
//e: hello -> hll
//p: 
// split into array
// go thru each el and check if vowel
//join new string and return


function disemvowel(str) {
  let newStr = []
  let tempStr = str.split('')
    tempStr.forEach(el=> {
    if (el.toLowerCase() === 'a' || el.toLowerCase() ===  'e'||el.toLowerCase() === 'i'
        || el.toLowerCase() ===  'o'|| el.toLowerCase() ===  'u' ){
    }else {
      newStr.push(el)
    }
  });
  return newStr.join("");
}


//hind sight filter does this much simpler