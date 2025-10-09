let fruits = ["Apple", "Orange", "Banana", "Strawberry", "Blueberry"];

// Add/Remove items at the END:

// pop() - remove LAST element and returns it
console.log(fruits.pop()); // removes "Blueberry" (last element) and returns it
console.log(fruits); // new array no longer has "Blueberry"

// push() - add element at the END 
fruits.push("Pear"); // adds "Pear" to the end of the array
console.log(fruits);

// Add/Remove items at the START:

// shift() - remove FIRST element and returns it
console.log(fruits.shift()); // removes "Apple" (first element) and returns it
console.log(fruits); // new array no longer has "Apple"

// unshift() - add element at the START
fruits.unshift("Pineapple"); // adds "Pineapple" to the start of the array
console.log(fruits);

// Add/Remove practice problems:

// 1. Array Operations:
// a. Create an array styles with items “Jazz” and “Blues”.
let styles = ["Jazz", "Blues"];

// b. Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");
console.log(styles);

// c. Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; // rounds the result down to nearest whole number and uses the index to point to the middle element
console.log(styles);

// d. Strip off the first value of the array and show it.
console.log(styles.shift());

// e. Prepend Rap and Reggae to the array.
styles.unshift("Rap", "Reggae");
console.log(styles);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Finding/Checking items (includes, indexOf, find, findIndex)

/* includes()
    - Checks if an array item exists
    - Returns 'true' or 'false'

Syntax:
    arr.includes(searchElement, fromIndex)
        - searchElement = value to search for
        - fromIndex (optional) = index to start searching
*/

let randomArr = [2, "hello", 67, true, "world"];
console.log(randomArr.includes(2)); // true
console.log(randomArr.includes(77)); // false
console.log(randomArr.includes("hello")); // true
console.log(randomArr.includes("World")); // false (case sensitive)

/* indexOf()
    - Returns the first index of a given element
    - Returns -1 if it does not exist

Syntax:
    arr.indexOf(searchElement, fromIndex)
        - searchElement = value to search for
        - fromIndex (optional) = index to start searching
*/

console.log(randomArr.indexOf(67)); // 2
console.log(randomArr.indexOf(false)); // -1
console.log(randomArr.indexOf("hello")); // 1

/* find()
    - Returns 1st element in an array that satisfies the provided element
    - Uses a callback function

Syntax:
    arr.find(callbackFunction)
        - callbackFunction = function to execute for each element in array
    Returns a the specified value or 'undefined'
*/

// 1. Find an object in an array by one of its properties
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "strawberries", quantity: 6 }
];

function isApples(fruit) {
    return fruit.name === "apples"; // determines if the fruits name = "apples"
}

console.log(inventory.find(isApples)); // returns { name: 'apples', quantity: 2 }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* splice()
    - Swiss army knife for arrays
    - Can insert, remove, and replace elements

Syntax:
    arr.splice(start[deleteCount, elem1, ..., elemN]);
        - start = zero-based index to start changing the array
        - deleteCount (optional) = how many elements to remove from 'start'
        - elem1, ..., elem2 (optional) = elements to add to the array beginning from 'start'
    returns array containing the deleted elements
*/

// 1. Remove 0 elements before index 2 and insert "drum"
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum"); // 2 = start at index 2; 0 = delete nothing; "drum" = add "drum" at index 2

console.log(myFish); // ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// 2. Remove 0 elements before index 2 and insert "drum" and "guitar"
myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum", "guitar"); // start at index 2, delete nothing, add "drum" and "guitar" starting at index 2

console.log(myFish);

// 3. Remove 0 elements at index 0 and insert "angel" - similar to unshift()
myFish = ["clown", "mandarin", "sturgeon"];
myFish.splice(0, 0, "angel"); // start at index 0, delete nothing, add "angel" at index 0

console.log(myFish);

// 4. Remove 0 elements at last index and insert "sturgeon" - similar to push()
myFish = ["angel", "clown", "mandarin"];
myFish.splice(myFish.length, 0, "sturgeon"); // start at last index, delete nothing, add "sturgeon"

console.log(myFish);

// 5. Remove 1 element at index 3
myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(3, 1);

console.log(myFish); 
console.log(removed); // returns "sturgeon"

// 6. Remove 1 element at index 2 and insert "trumpet"
myFish = ["angel", "clown", "mandarin", "sturgeon"];
removed = myFish.splice(2, 1, "trumpet"); // replaces "mandarin" with "trumpet"

console.log(myFish);
console.log(removed); // returns "mandarin"

// 7. Remove 2 elements from index 0 and insert "parrot", "anemone", and "blue"
myFish = ["angel", "clown", "mandarin", "sturgeon"];
removed = myFish.splice(0, 2, "parrot", "anemone", "blue"); // replaces "angel" and "clown"

console.log(myFish);
console.log(removed); // returns "angel" and "clown"

// 8. Remove ALL elements starting from index 2
myFish = ["angel", "clown", "mandarin", "sturgeon"];
removed = myFish.splice(2); // removes everything from index 2 and on (i.e. "mandarin" and "sturgeon")

console.log(myFish); // only contains "angel" and "clown" now
console.log(removed);

/* slice()
    - Returns a shallow copy of a portion of an array
    - Creates a new array from start to end (end not included)
    - Start and end = index of items in the array
    - Original array not modified

Syntax:
    arr.slice(start, end)
        - start (optional) = index to start extraction
        - end (optional) = inde to end extraction (up to but not including 'end')
    returns new array with extracted elements
*/

// 1. Return a portion of an existing array
const instruments = ["guitar", "bass", "drums", "microphone", "keyboard"];
let stringInstruments = instruments.slice(0, 2); // extracts from index 0 up to but not including 2

console.log(instruments);
console.log(stringInstruments); // ['guitar', 'bass']

// 2. Omitting the end parameter
console.log(instruments.slice(2)); // extracts elements from index 2 to the end of the array

// 3. Extract the first 3 elements
console.log(instruments.slice(0, 3));

// 4. Extract the last 2 elements
console.log(instruments.slice(-2)); // grabs the last 2 elements using negative index's

// 5. Copy an array
let copyInstruments = instruments.slice();
console.log(copyInstruments);





    