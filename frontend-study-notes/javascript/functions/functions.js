/*
Functions:
    - Reusable block of code
    - Performs a specific task
    - Can take input (parameters), execute statetments, and return results
    - Organize code, avoid repetition, and make programs easier to maintain
*/

// Function syntax:
function functionName(parameter) {
    return value;
}

// Basic function example:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Josh"));

// Practice examples:

// 1. Calculate the area of a rectangle
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(10, 5)); // Output: 50

// 2. Check if a number is even
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5)); // Output: false
console.log(isEven(22)); // Output: true

// 3. Find the largest of a given array of numbers
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let arrOfNums = [12, 42, 1, 77, 908, 55, 103];
console.log(findMax(arrOfNums));

// 4. Convert a number from Celcius to Fahrenheit 
function celciusToFahr(temperature) {
    return (temperature * 1.8) + 32;
}
console.log(celciusToFahr(0));

// 5. The price of a candy bar is 2 dollars. You can exchange 3 candy bar wrappers for a free candy bar.
// Write a function to calculate the number of candy bars you can eat with 16 dollars.
function candyBars(dollars) {
    let costPerBar = 2;
    // 3 bars = 1 free
    let totalCandyBars = dollars / costPerBar;
    let wrappers = totalCandyBars;

    while (wrappers >= 3) {
        let freeBars = Math.floor(wrappers / 3);
        totalCandyBars += freeBars;
        wrappers = (wrappers % 3) + freeBars; // remaining wrappers + new free bars' wrappers
    }
    return totalCandyBars
}

console.log(candyBars(16));

// 6. Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
function sumOfEvens(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

