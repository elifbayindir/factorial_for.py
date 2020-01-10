// Non-recursive Binary Search

function binarySearch(arr, value){
    let min = 0; 
    let max = arr.length-1; 
    while(min <= max){ 
        let middle = Math.floor((min + max) / 2); 
        if (arr[middle] < value){
            min = middle + 1;
        }
        else if (arr[middle] > value){
            max = middle - 1;
        }

        else {
            return middle; // we find the value we want, we return the index (arr[middle] === value case) middle is our index now
        }

    }


    return -1; // if we never find the value
}

console.log(binarySearch([1,3,5,7,9,11], 7))
