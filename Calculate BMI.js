// P: nums for height and weight
// R: str depending on calc
// E: bmi(80, 1.80) -> "Normal"
// P: calculate bmi
// check what is bmi return relevant str

function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  
}