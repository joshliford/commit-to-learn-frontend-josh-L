/*
Arrays:
    - Objects that store ordered collections of data
    - Each element in an array is stored in an index
    - Indexing starts at 0
    - Can hold different data types
*/

// Basic array example:
let fruits = ["Apple", "Orange", "Banana"];

// Access elements using bracket notation:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Banana

// Find the length of an array:
console.log(fruits.length); // 3

// Find the last element in an array:
console.log(fruits.at(-1)); // returns the item at a specific index
// or
console.log(fruits[fruits.length - 1]); // Banana

// Looping through arrays
// Traditional for loop:
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

/*
For...of loop:
    - Iterates over iterable objects (arrays, strings)
    - Gives the value of each element directly without indexing 
*/

for (let fruit of fruits) {
    console.log(fruit); // loops through each fruit and logs it
}

let numbers = [1, 2, 3, 4];

for (let number of numbers) { // goes through each value in the array 'numbers' one at a time and temporarily calls them 'number'
    console.log(number * 2); // on each pass it takes that 'number' and doubles it 
}
