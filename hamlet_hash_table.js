// Word Frequency Counter with using Hash Tables

"use strict"
const fs = require('fs') 
  class HashTable {
  constructor(size=53){ // size of the hash table, we chose prime number 
    this.store_key = new Array(size); // make a new array of that size and store that as store_key, we will store all data in here
  }

  _hash(key) { // hash function
    let total = 0;
    let prime_number = 31; // using prime numbers is more efficient
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96 // "-96" converts ASCII codes to alphanumeric order
      total = (total * prime_number + value) % this.store_key.length; 
    }
    return total;
  }

  set(key,value){ // it accepts key and a values
    let index = this._hash(key); // it decides where to store the key
    if(!this.store_key[index]){ // unused index case checks if it's empty or not
      this.store_key[index] = []; // set index of that array of our store_key to be an empty array
    }
    this.store_key[index].push([key, value]); // it sets element
    console.log([key, value])
  }

  get(key){
    let index = this._hash(key);
    if(this.store_key[index]){
      for(let i = 0; i < this.store_key[index].length; i++){ // once it finds the correct spot, it will check all array elements 
        if(this.store_key[index][i][0] === key) {
          return this.store_key[index][i][1]
        }
      }
    }
    return undefined; // if index is empty
  }
}

fs.readFile('Hamlet.txt', 'utf-8', (err, data) => { // it reads data in utf-8 format which is a type of character set
    if (err) throw err; 

    var str=data; 
    var dataArr = [];
    var bannedChars = [".",",","?","!",":",";","'",'"',"\n"]; // it converts punctuation marks to empty string because we don't want to count them
    for(var i = 0; i < bannedChars.length; i++){  // it converts text elements to a seperate array elements
	str = str.split(bannedChars[i]).join("");
     }

    dataArr = str.split(" ");
	
    var lowerArr = [];  // it converts all uppercases to lowercase because they have different ASCII code
    for (var l = 0; l < dataArr.length; l++) {
        lowerArr[l] = (dataArr[l].toLowerCase());
    }


    var hashes = [];
    var length = 100;
    let ht = new HashTable(length);
    for(var j = 0; j < lowerArr.length; j++){ // it sets array elements into hash table
    	ht.set(lowerArr[j],ht._hash(lowerArr[j])); 
	}
    for(var k = 0; k < lowerArr.length; k++){ // it gets values of the words (keys)
	hashes.push(ht.get(lowerArr[k]));
    }
    
for(var t = 0; t < hashes.length; t++){  // it counts repeated values in an array, so we can find frequency of each word in the text

    var count = 0;
	    for(var a = 0; a < hashes.length; a++)
                if(hashes[t] == hashes[a]){
                    count += 1;
                }
		else{
                    continue
                }
	    console.log(hashes[t], count)
    }
	console.log(hashes);
})
























