// input arr
// output arr without missing numbers
// [1,2,3,5,6,8,9] -> [1,2,3,4,5,6,7,8,9]
// find min and max and create arr
// loop from min to max and push to arr

function pipeFix(numbers){
 let min = Math.min(...numbers)
 let max = Math.max(...numbers)
 let ans = []
 for(let i = min; i <= max; i++){
   ans.push(i)
 }
 return ans
}
