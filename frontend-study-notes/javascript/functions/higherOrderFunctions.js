/* Higher Order Functions:
    - Functions that either:
        - Take another function as an argument, or
        - Return a function
*/ 

// 1. Create a function that returns a function that multiplies by factor
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    }
}
const doubleNum = createMultiplier(2); // multiply by 2
const tripleNum = createMultiplier(3); // multiply by 3

console.log(doubleNum(2)); // Output: 4
console.log(tripleNum(3)); // Output : 9