// Implementation of quick sort

function helper(arr, start=0, end=arr.length+1){
  function swap(array, i, j) { // it swaps the elements
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let helper = arr[start]; // assume the helper is always the first element
  let swap_index = start;  // swap_index: it will keep track of where we are going to swap first element at the end

  for(var i = start + 1; i < arr.length; i++){
    if (helper > arr[i]) {
      swap_index++;
      swap(arr, swap_index, i);
    }
  }

  swap(arr, start, swap_index);   
  return swap_index;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let helperIndex = helper(arr, left, right) 
        quickSort(arr,left,helperIndex-1); // left
        quickSort(arr,helperIndex+1,right); // right
      }
     return arr;
} 
           
console.log(quickSort([72, 30, 12, 84, 67, -2]));








