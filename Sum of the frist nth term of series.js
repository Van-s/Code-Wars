// input int
// output float for sum of series to nth term
// series -> Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16
// ex: SeriesSum(3) - > "1.39"
// loop thru series for n times
// sum at each point
// convert to string and round to 2 decimal places



function SeriesSum(n){
  let total = 0
  for (let i = 0; i < n; i++){
    total += 1/(1 + i * 3)
  }
  return total.toFixed(2)
}