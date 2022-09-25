// input int, int
// output int
// (8, 10) -> 3
// get leftover time after number of kata done
// create time ane mistakes holder
// loop thru doubling time and adding a mistake to counter
// return mistakes

function alexMistakes(numberOfKata, timeLimit){
  let leftOver = timeLimit - numberOfKata*6
  let time = 5
  let mistakes = 0
  while(leftOver > time){
    leftOver = leftOver - time
    mistakes += 1
    time *= 2
  }
  return mistakes
}