// Find Closest Sum Block

function closestSumBlock(arr, v){  // v: target value
	let sum = 0;
	let len = arr.length;
	let i = -1;
	let j = -1;
	let result = [i, j, Math.abs(v - arr[0])];
	
	for(let i = 0; i < len; i++){ // 2 loop searches all possible subarrays
		sum = 0; 
		for(let j = i; j < len; j++){
			sum += arr[j];
			diff = Math.abs(v - sum); // diff: difference between the number we are searching and the sum of subarray values
			if(diff < result[2]){ // if diff < Math.abs(v - arr[0]) 
				result = [i, j, diff];
			}
			if(diff == 0){ // if sum equals to target value 
				return result;
			}
		}
		}
	return result;
}

let arr = [-1, -5, 7, -10] ; 
let v = 4;

let [a, b, minDiff] = closestSumBlock(arr, v); // minDiff: minimum difference

if(a == -1){
	console.log("Array empty");
	return -1;
	}
for(let x = a; x < b + 1; x++){
	console.log(arr[x]);
	}

// -5, 7

// Math.abs: It takes a number as its parameter and returns its absolute value. 

