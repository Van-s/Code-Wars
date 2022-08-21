//P: list /w pos ints,  and strs
//R: list of only pos ints
//E: filter_list([1,2,'a','b']),[1,2])
// filter_list([1,2,'aasf','1','123',123]),[1,2,123])
// go thru each element -> filter out str


function filter_list(l) {
  return l.filter(el => typeof el === 'number')
}