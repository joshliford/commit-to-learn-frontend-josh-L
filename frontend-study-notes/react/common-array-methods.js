/* These are some of the *cruicial* array methods that are used in React
    - map(), filter(), find(), reduce(), forEach()
    - Each method returns a NEW ARRAY!
*/

/* REACT RENDER LOGIC (map() & filter())------------------------------------------------------ */

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
const upperCaseWords = ["JAVASCRIPT", "HTML", "REACT", "PYTHON"];
console.log(upperCaseWords.map(word => word.toLowerCase()));

// 2. Extract the name property from objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 45 }
];
let usersName = users.map(user => user.name); // on each callback grab the user's name and return it
console.log(usersName);

// 3. Convert from Celcius to Fahrenheit
const temperaturesInF = [32, 68, 86, 104];
let temperaturesToC = temperaturesInF.map(temp => Math.floor(temp - 32) * 5 / 9);
console.log(temperaturesToC);

// 4. Transform numbers to strings
const dollars = [80, 90, 100, 70];
let stringdollars = dollars.map(num => `$${num}`);
console.log(stringdollars);