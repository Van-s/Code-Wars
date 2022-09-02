// input -> str
// output -> int
// ex [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]-> 5)
// [10] -> 10
// take first el check count if even filter if odd return int

function findOdd(A) {
  let count = 0
  for(let i = 0; i < A.length; i++){
    if(A[i] === A[0]){
      count++
    }
  }
  if(count%2 === 0){
    return findOdd(A.filter(el => el !== A[0]))
  }else {
    return A[0]
  }
}

