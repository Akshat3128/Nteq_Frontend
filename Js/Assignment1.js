//  A1: Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // result: "olleh"


// A2: Find the Largest Number in an Array
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([3, 7, 2, 9, 5])); // result: 9

// A3: Double the Numbers Using map
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3])); // result: [2, 4, 6]

// A4: Filter Even Numbers Using filter
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // result: [2, 4, 6]
