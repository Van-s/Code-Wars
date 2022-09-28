// input int int
// output int
// 6, 10 -> 32
// 3, 3 -> 9
// check if l and w equal if so return area if not return perimeter



const areaOrPerimeter = function(l , w) {
  return l === w? w**2 : 2*w + 2*l
};