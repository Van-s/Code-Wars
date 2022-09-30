// input two str
// output boolean
// check if anagram
// turn all letters lower case
// turn string to array
// sort arr
// turn arr to str
// compare to check if equal

var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
};
