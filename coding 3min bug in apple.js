// input 2d arr
// out coord [int,int]
// apple=[
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","B","A","A","A"]
// ],answer=[4,1];
// creat loop to go thru y of arr
// loop for x of arr
// check for B and return location

function sc(apple){
  for(let i = 0; i < apple.length; i++){
    for(let j = 0; j < apple[i].length ; j++){
      if(apple[i][j] === 'B'){
        return [i,j]
      }
    }
  }
}