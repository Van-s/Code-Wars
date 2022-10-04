// input arr of random obj
// output is pos of 'needle'
// ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'] --> 5
// loop thru arr and find needle store pos and return
// if no needle return none
// 

function findNeedle(haystack) {
  let pos = -10
  for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === 'needle'){
      pos = i
    }
  }
  if (pos !== -10){
      return (`found the needle at position ${pos}`)
  }else {
    return "Your function didn't return anything"
  }

}
