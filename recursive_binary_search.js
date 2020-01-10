// Recursive Binary Search

let arr = [1,3,5,7,9,11];  
function binarySearch(arr, min, max, value) { // min: left pointer, max: right pointer, value: element of the array we are searching
    if(min > max) {
      return -1;
    }
    let middle = Math.floor((min + max) / 2); /* Pointer in the middledle */

    if(arr[middle] === value) return middle;
    if(value > arr[middle]) {
        return binarySearch(arr, middle + 1, max, value);
    } else if(value < arr[middle]) {
        return binarySearch(arr, min, middle -1, value);
    }
}
console.log(binarySearch([1,3,5,7,9,11], 0, arr.length - 1, 7));

// math.floor: it works with integers, if the result is decimal it rounds

