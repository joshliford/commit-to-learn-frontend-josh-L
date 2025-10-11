let fruits = ["Apple", "Orange", "Banana", "Strawberry", "Blueberry"];

// Add/Remove items at the END (pop, push):

// pop() - remove LAST element and returns it
console.log(fruits.pop()); // removes "Blueberry" (last element) and returns it
console.log(fruits); // new array no longer has "Blueberry"

// push() - add element at the END 
fruits.push("Pear"); // adds "Pear" to the end of the array
console.log(fruits); // ["Apple", "Orange", "Banana", "Strawberry", "Blueberry", "Pear"]

// Add/Remove items at the START (shift, unshift):

// shift() - remove FIRST element and returns it
console.log(fruits.shift()); // removes "Apple" (first element) and returns it
console.log(fruits); // new array no longer has "Apple"

// unshift() - add element at the START
fruits.unshift("Pineapple"); // adds "Pineapple" to the start of the array
console.log(fruits); // ["Pineapple", "Apple", "Orange", "Banana", "Strawberry", "Blueberry"]

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

/* findIndex()
    - Returns index of the 1st element that satisfies the condition
    - Returns -1 if no element is found

Syntax:
    arr.findIndex(callbackFn)
        - callbackFn executes for each element in the array
*/

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Mutating/Transforming/Iterating Arrays (map, splice, forEach, filter, reduce, sort, reverse)

/* map()
    - Transforms each element
    - Returns a new array
    - Doesn’t modify the original
    - Runs a callback once for each element

Syntax:
    arr.map(function(item, index, array) {
        - returns the new value instead of item
});
*/

// 1. Convert to lowercase
let languages = ["JAVASCRIPT", "PYTHON", "HTML", "SWIFT"];
let lowercaseLang = languages.map(language => language.toLowerCase());
console.log(lowercaseLang);

// 2. Extract the name property from objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let peopleNames = people.map(person => person.name); // grab each name from the 'people' array of objects
console.log(peopleNames);

// 3. Convert from Celcius to Fahrenheit
const temperaturesInF = [32, 68, 86, 104];
let temperaturesToC = temperaturesInF.map(temp => Math.floor((temp - 32) * 5 / 9));
console.log(temperaturesToC);

// 4. Transform numbers to strings
const nums = [10, 20, 33, 1, 90];
let price = nums.map(num => `$${num}`);
console.log(price);

// 5. Conditional transformation
let evenOrOdd = nums.map(num => { // for each number, check if its even or odd then update the value to reflect that
   if (num % 2 === 0) {
    num = true;
   } else {
    num = false;
   }
   return num;
});
console.log(evenOrOdd);

// 6. Format objects
const techItems = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 800 }
]
let formattedTechItems = techItems.map(item => `${item.name} costs $${item.price}`);
console.log(formattedTechItems); // Returns an array of formatted strings

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

/* forEach()
    - Iterates through each element
    - Executes a function for each element 
    - No return value, just transforms the array

Syntax: 
    arr.forEach(callbackFn)
        - callbackFn = executes for each element in the array
*/

// 1. Log each element
const animals = ["Dog", "Cat", "Bird", "Bear"];
animals.forEach(animal => console.log(animal));

// 2. Capitalize first letter
const teams = ["oilers", "kings", "bruins", "avalanche"];
teams.forEach(team => {
    console.log(team.charAt(0).toUpperCase() + team.slice(1));
    /*
        1) charAt(0) extracts the first character of each team
        2) toUpperCase converts the first character to uppercase
        3) team.slice(1) returns the rest of the team name starting from index 1
    */
});

/* filter()
    - Creates new array with elements that pass a given parameter

Syntax:
    arr.filter(callbackFn)
        - callbackFn = function to execute for each element in the array
*/

// 1. Filter short words
const zoo = ["Giraffe", "Monkey", "Lion", "Turtle", "Seal", "Snake"];
let shortWords = zoo.filter(word => word.length <= 4); // filters out words that are <= 4 char long
console.log(shortWords); //['Lion', 'Seal']

// 2. Filter words that start with a specific letter
let startsWithS = zoo.filter(word => word.toLowerCase().startsWith("s")); // filters out words that start with 's'
console.log(startsWithS); // ['Seal', 'Snake']
console.log(zoo); // doesn't mutate original array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Combining/Extracting (slice, concat, join)

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





    