// input int
// output int
// 1705 -> 18
// divide by 100 and round up to get century

function century(year) {
  return Math.ceil(year/100)
}