/*
Arrow Functions:
    - Shorthand way to write functions
    - Used for simple actions
    - Right side is an expression:
        - The function evaluates it and returns the result
*/

// Arrow Function syntax:
let func = (arg1, arg2) => expression;

// Basic example:
let sum = (num1, num2) => num1 + num2;
console.log(sum(2, 2));

// Single argument example:
let double = n => n * 2;
console.log(double(10)); // Output: 20

// No argument example:
let sayHi = () => "Hello";
console.log(sayHi());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Basic practice examples:

// 1. Calculate the area of a rectangle
let area = (length, width) => length * width;
console.log(area(10, 5)); // Output: 50

// 2. Check if a number is even
let isEven = num => num % 2 === 0 ? true : false; // if num % 2 === 0 then true, else false
console.log(isEven(4)); // Output: true
console.log(isEven(15)); // Output: false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 
Arrow functions & array methods

Given the array, complete the following:
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Use .map() to square each number
const squared = numbers.map(num => num * num); // takes each number and returns the squared value of each
console.log(squared); // .map() returns a brand new array with altered values

// 2. Use .filter() to get only even numbers
const evenNums = numbers.filter(num => num % 2 === 0); // checks each number - if it's even it is added to the filtered array
console.log(evenNums);

// 3. Use .reduce() to find the sum of all numbers
const sumOfNums = numbers.reduce((total, num) => total += num);
/*
1st step: total = 1 + 2 = 3
2nd step: total = 3 + 2 = 5
3rd step: total = 5 + 3 = 8
...
9th step: total = 45 + 10 = 55
Final: total = 55
*/
console.log(sumOfNums); // .reduce() takes an array and boils it down to one value by repeatedly applying a function

// 4. Use .find() to get the first number greater than 5
const greaterThanFive = numbers.find(num => num > 5); // is this number > 5? if not go to the next
console.log(greaterThanFive);
