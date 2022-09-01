// input int
// output int
// 2 -> 80\
// check if more then 7 then subtract 50 from total
// if more then 3 subtract 20 from total
// else just create total



function rentalCarCost(d) {
  if(d >= 7){
    return d*40 -50
  } else if(d >= 3){
    return d*40 -20
  } else {
    return d*40
  }
}