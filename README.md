Question 1: Reverse an Array
Problem: Write a function that takes an array and returns a new array with the elements in reverse order.
Input: [1, 2, 3, 4, 5]

Output: [5, 4, 3, 2, 1]

Use Case: This function can be used in a web application where user reviews need to be displayed in reverse chronological order.

Answer: 

// Define the function to reverse an array
function reverseArray(arr) {
    // Create a copy of the array using slice() and reverse it
    return arr.slice().reverse();
}

// Define the original array
let originalArray = [1, 2, 3, 4, 5];

// Call the reverseArray function and store the result
let reversedArray = reverseArray(originalArray);

// Print the reversed array
console.log(reversedArray);  // Output: [5, 4, 3, 2, 1]

Question 2: Flatten an Array
Problem: Write a function that takes a nested array and flattens it to a single-level array.

Input: [1, [2, 3], [4, [5]]]

Output: [1, 2, 3, 4, 5]

Use Case: Useful for aggregating user-selected items from multiple categories into a single list for checkout.

Answer: 

// Define the function to flatten an array
function flattenArray(arr) {
    // Use reduce to accumulate values, checking if each value is an array
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Define the nested array
let nestedArray = [1, [2, 3], [4, [5]]];

// Call the flattenArray function and store the result
let flattenedArray = flattenArray(nestedArray);

// Print the flattened array
console.log(flattenedArray);  // Output: [1, 2, 3, 4, 5]

Question 3: Check for Duplicates
Problem: Write a function that checks if an array contains duplicates.

Input: [1, 2, 3, 4, 5, 1]

Output: true

Input: [1, 2, 3, 4, 5]

Output: false

Use Case: Can be used to validate user inputs in forms, such as ensuring usernames are unique during registration.

Answer: 

// Define the function to check for duplicates
function containsDuplicates(arr) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Compare the current element with the remaining elements
        for (let j = i + 1; j < arr.length; j++) {
            // If a duplicate is found, return true
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    // If no duplicates are found, return false
    return false;
}

// Define arrays with and without duplicates
let arrayWithDuplicates = [1, 2, 3, 4, 5, 1];
let arrayWithoutDuplicates = [1, 2, 3, 4, 5];

// Call the containsDuplicates function and print the results
console.log(containsDuplicates(arrayWithDuplicates));  // Output: true
console.log(containsDuplicates(arrayWithoutDuplicates));  // Output: false

Question 4: Merge Two Objects
Problem: Write a function that merges two objects into one.

Input: { a: 1, b: 2 }, { b: 2, c: 4 }

Output: { a: 1, b: 2, c: 4 }

Use Case: This can be used in a web application to combine user profile settings from different sources.

Answer:

// Define the function to merge two objects
function mergeObject(obj1, obj2) {
    // Use the spread operator to combine obj1 and obj2
    return { ...obj1, ...obj2 };
}

// Define the objects to merge
let object1 = { a: 1, b: 2 };
let object2 = { b: 2, c: 3 };

// Call the mergeObject function and store the result
let mergedObject = mergeObject(object1, object2);

// Print the merged object
console.log(mergedObject);  // Output: { a: 1, b: 2, c: 3 }

Question 5: Find the Maximum Number in an Array Problem: Write a function that finds the maximum number in an array. Input: [1, 3, 2, 8, 5]
Output: 8

Use Case: This function can help in analytics dashboards to find the highest sales figure or user activity.

Answer:

// Define the function to find the maximum number in an array
function findMax(arr) {
    // Use the spread operator to pass the array elements to Math.max
    return Math.max(...arr);
}

// Define the array of numbers
let numbers = [1, 3, 2, 8, 5];

// Call the findMax function and store the result
let maxNumbers = findMax(numbers);

// Print the maximum number
console.log(maxNumbers);  // Output: 8

Question 6: Group Array of Objects by Property
Problem: Write a function that groups an array of objects by a specific property. Input: [ { id: 1, category: 'fruit' }, { id: 2, category: 'vegetable' }, { id: 3, category: 'fruit' } ] Output: {
fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ], vegetable: [ { id: 2, category: 'vegetable' } ]
}

Use Case: Useful for organizing products by category in an e-commerce application.


Answer:

// Define the function to group an array of objects by a specific property
function groupArray(arr) {
    // Use reduce to iterate over the array and group objects by category
    return arr.reduce((acc, obj) => {
        // Use the 'category' property as the key for grouping
        const key = obj.category;
        // If the key doesn't exist in the accumulator, create an empty array for it
        if (!acc[key]) {
            acc[key] = [];
        }
        // Push the current object into the corresponding group
        acc[key].push(obj);
        return acc;
    }, {});
}

// Define the array of objects
let object = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
];

// Call the groupArray function and store the result
let arrayGroup = groupArray(object);

// Print the grouped array
console.log(arrayGroup);
// Output: { fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ], vegetable: [ { id: 2, category: 'vegetable' } ] }

Question 7: Find the Intersection of Two Arrays Problem: Write a function that returns the intersection of two arrays. Input: [1, 2, 3], [2, 3, 4]
Output: [2, 3]

Use Case: This can be used in social media applications to find mutual friends between users.

Answer:

// Define the function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
    // Use filter to find elements in arr1 that are also in arr2
    return arr1.filter(value => arr2.includes(value));
}

// Define the arrays to be intersected
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

// Call the findIntersection function and store the result
const intersection = findIntersection(array1, array2);

// Print the intersection array
console.log(intersection);  // Output: [2, 3]

Question 8: Calculate the Sum of Array Elements
Problem: Write a function that calculates the sum of all numbers in an array.

Input: [1, 2, 3, 4, 5]

Output: 15

Use Case: Useful in financial applications to calculate the total expenses or revenue.

Answer:

// Define the function to calculate the sum of an array
function calculateSum(arr) {
    // Use reduce to sum all values in the array, starting with 0 as the initial total
    return arr.reduce((total, value) => total + value, 0);
}

// Define the array of numbers
const array = [1, 2, 3, 4, 5];

// Call the calculateSum function and store the result
const sum = calculateSum(array);

// Print the sum
console.log(sum);  // Output: 15

Question 9: Remove Falsy Values from an Array Problem: Write a function that removes all falsy values from an array. Input: [0, 1, false, 2, '', 3]
Output: [1, 2, 3]

Use Case: This function can be used to clean up user inputs or configuration arrays.

Answer:

// Define the function to remove falsy values from an array
function removeFalsy(arr) {
    // Use the filter method with Boolean to remove falsy values
    return arr.filter(Boolean);
}

// Define the array with falsy values
const array = [0, 1, false, 2, '', 3];

// Call the removeFalsy function and store the result
const removeValue = removeFalsy(array);

// Print the array with falsy values removed
console.log(removeValue);  // Output: [1, 2, 3]

Question 10: Calculate Average of an Array
Problem: Write a function that calculates the average of all numbers in an array.

Input: [1, 2, 3, 4, 5]

Output: 3

Use Case: This function is useful in educational applications where you need to compute the average score of students from an array of their grades.

Answer:

// Define the function to calculate the average of an array
function totalAverage(arr) {
    // Calculate the sum of the array using reduce
    const sum = arr.reduce((a, b) => a + b, 0);
    // Return the average by dividing the sum by the length of the array
    return sum / arr.length;
}

// Define the array of numbers
const array = [1, 2, 3, 4, 5];

// Call the totalAverage function and store the result
const average = totalAverage(array);

// Print the average
console.log(average);  // Output: 3
