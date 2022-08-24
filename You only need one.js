// P: arr and val -> str or Int
// R: Boolean
// E:check([66, 101], 66) -> true
//   check([101, 45, 75, 105, 99, 107], 107) -> true
//   check(['t', 'e', 's', 't'], 'e') -> true
//   check(['what', 'a', 'great', 'kata'], 'kat') -> false
// P: check if val in arr -> use includes

function check(a, x) {
  return a.includes(x)
}