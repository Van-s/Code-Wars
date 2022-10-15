// input arr with one wolf and sometimes sheep
// output warn the sheep in front of the wolf direction is a que
// ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
// 		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
// reverse arr 
// length of arr - (length of arr - pos of wolf)

function warnTheSheep(queue) {
  let que = queue.reverse()
 return que.length - (que.length  -que.indexOf('wolf'))> 0?`Oi! Sheep number ${que.length - (que.length  -que.indexOf('wolf')) }! You are about to be eaten by a wolf!`: 'Pls go away and stop eating my sheep'
}
