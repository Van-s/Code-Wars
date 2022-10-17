// input arr
// output boolean on if the arr is in ascending order
// [1, 6, 10, 18, 2, 4, 20] -> false
// looop thru arr until second to last term
// if at any point a item is more then the item that follows return false
// if make it to second to last term and it is smaller then last term return true

function inAscOrder(arr) {
  for(let i = 0; i < arr.length -1; i++){
    if( arr[i] < arr[i+1]){
      if( i === arr.length - 2){
        return true
      }
    }
    else{
      return false
    }
  }
}
