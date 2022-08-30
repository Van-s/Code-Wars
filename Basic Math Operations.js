// input symb adn two int
// output int
// basicOp('+', 4, 7) -> 11
// basicOp('-', 15, 18) -> -3
// check symbol then perform action based on it




function basicOp(operation, value1, value2){
  return operation === "+"? value1+value2: operation === "-"? value1-value2: operation === "*"? value1 * value2 :value1/value2
}

// intrigued by switch case

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

// eval?, would compute a str and return int

function basicOp(o, a, b) {
  return eval(a+o+b);
}