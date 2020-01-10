// Find Local Minimum

function findLocMin(arr, start, end){ 
	let middle = Math.floor((start + end) / 2); /* index of middle element */
	if ((middle == 0 || (arr[middle] < arr[middle - 1])) && (middle == arr.length-1 || (arr[middle] < arr[middle + 1]))){ // checks middle element is smaller than the element before and element after it. It also checks if there is only 1 element (middle == 0 && middle == arr.length-1) case. It also checks increasing ((arr[middle] < arr[middle + 1]) && middle = 0) or decreasing array elements case (middle == arr.length-1 && (arr[middle] < arr[middle - 1]))
		return middle;
	}
	else if (arr[middle - 1] < arr[middle]){ // if the value of the left element of middle is less than value of middle
		return findLocMin(arr, start, middle - 1); // left half of the array is recursively called
	}
        return findLocMin(arr, middle + 1, end); // if the value of the right element of middle is less than value of middle, right half of the array is recursively called
}

let arr = [8,10,5,7,2,11];
let start = 0; 
let end = arr.length-1; 

console.log("Index of the local minimum:", findLocMin(arr, start, end))


// Index of the local minimum: 2 

let arr1 = [1,3,5,7,9,11];
let start1 = 0; 
let end1 = arr1.length-1; 

console.log("Index of the local minimum:", findLocMin(arr1, start1, end1))

// Index of the local minimum: 0

let arr2 = [8,10,7,2,11];
let start2 = 0; 
let end2 = arr2.length-1; 

console.log("Index of the local minimum:", findLocMin(arr2, start2, end2))

// Index of the local minimum: 3

let arr3 = [10, 8, 6, 4, 2];
let start3 = 0; 
let end3 = arr3.length-1; 

console.log("Index of the local minimum:", findLocMin(arr3, start3, end3))

// Index of the local minimum: 4 

// math.floor: it works with integers, if the result is decimal it rounds

// NOTE: If there are more than 1 local minimum it prints any of them
