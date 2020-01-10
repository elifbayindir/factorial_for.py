// Implementation of merge sort

function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){ // recusive merge sort
    if(arr.length <= 1) {
      return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

console.log(mergeSort([72, 30, 12, 84, 67, -2]));

// push(): it adds new items to the end of an array, and returns the new length
// slice(): it returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified
// math.floor: it works with integers, if the result is decimal it rounds
