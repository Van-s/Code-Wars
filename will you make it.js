// input distance to pump, mpg and gallons of fuel
// output is if you make it or not boolean
// 50, 25, 2 -> true
// check if distance is less than or equal to mpg*gallons

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg*fuelLeft
};
