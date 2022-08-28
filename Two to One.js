// input -> two str
// output -> str
// ex : "aretheyhere", "yestheyarehere" -> "aehrsty"
// "loopingisfunbutdangerous", "lessdangerousthancoding" -> "abcdefghilnoprstu"
// join the strs
// to arr - filter dupes out -> join


function longest(s1, s2) {
  let work = (s1+ s2).split('')
  let ans = []
  for (let i = 0; i < work.length; i++){
    if(!ans.includes(work[i])){
      ans.push(work[i])
    }
  }
  return ans.sort().join('')
}