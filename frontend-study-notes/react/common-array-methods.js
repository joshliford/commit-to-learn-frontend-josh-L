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

// 4. Create HTML list items from an array of strings
const fruits = ["Bananas", "Oranges", "Apples", "Blueberries"];
const listItems = fruits.map(fruit => `<li>${fruit}</li>`);
console.log(listItems);

// 5. Create an array of <option> elements from an array of country names
const countries = ["USA", "Asia", "Germany", "Japan"];
const options = countries.map(country => `<option>${country}</option>`);
console.log(options);

/* filter()
    - Creates new array with elements that pass a given parameter

Syntax:
    arr.filter(callbackFn)
        - callbackFn = function to execute for each element in the array
*/

// 1. Filter out users under a certain age
let underThirty = users.filter(user => user.age < 30);
console.log(underThirty);

// 2. Filter out products that are out of stock
const productInventory = [
    { product: "laptop", inStock: true },
    { product: "monitor", inStock: false},
    { product: "mouse", inStock: false },
    { product: "camera", inStock: true }
];
let unavailableProducts = productInventory.filter(product => product.inStock === false);
console.log(productInventory);
console.log(unavailableProducts);

// 3. Get only emails that end with "@gmail.com"
const emailList = ["john.doe@gmail.com", "sally.jane@yahoo.com", "jim.halpert@hotmail.com", "michael.scott@gmail.com"];
let googleEmails = emailList.filter(email => email.includes("@gmail.com"));
console.log(emailList);
console.log(googleEmails);

/* find()
    - Returns 1st element in an array that satisfies the provided element
    - Uses a callback function

Syntax:
    arr.find(callbackFunction)
        - callbackFunction = function to execute for each element in array
    - Returns a the specified value or 'undefined'
    - Does not return an array, only a single value/object
*/

// 1. Get the first email address that ends with "@gmail.com"
let firstEmailMatch = emailList.find(email => email.includes("@gmail.com"));
console.log(firstEmailMatch);

// 2. Find the first number greater than 100 in an array of numbers
const numbers = [33, 25, 102, 99, 115, 4, 207];
let greaterThanOneHundred = numbers.find(number => number > 100);
console.log(greaterThanOneHundred);

// 3. Locate the first fruit that starts with the letter "B"
let letterB = fruits.find(fruit => fruit.charAt(0).toLowerCase() === "b");
console.log(letterB);


/* reduce()
    - Boils down an array into a single value
    - Applies callback function to each element in the array
    - Accumulates a result as the callback function is applied

Syntax:
    arr.reduce((accumulator, currentValue) => {
            ...Logic...
        })
*/

// 1.


/* forEach()
    - Iterates through each element
    - Executes a function for each element 
    - No return value, just transforms the array

Syntax: 
    arr.forEach(callbackFn)
        - callbackFn = executes for each element in the array
*/

// 1. Log each user's name from an array of user objects
users.forEach(user => {
    console.log(user.name);
});

// 2. Print each fruit with its index
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index} Fruit: ${fruit}`);
});

// 3. Add up all numbers in an array and log the running total after each addition
let total = 0;
numbers.forEach(number => {
    total += number;
    console.log(`Total: ${total}`);
})