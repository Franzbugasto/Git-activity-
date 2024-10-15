// Task 1: Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Combined array:", combinedArr); // ["Cecile", "Lone", "Emil", "Tobias", "Linus"]
// Task 2: Use push() to add an element "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
// Task 3: Use unshift() to add two numbers 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1); // [4, 5, 1, 2, 3]
// Task 4: Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits after pop:", fruits); // ["Banana", "Orange", "Apple", "Mango"]
// Task 5: Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2); // [2, 3]
// Task 6: Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Fruits after sort:", fruits); // ["Apple", "Banana", "Mango", "Orange"]
// Task 7: Use slice() to create a new array containing a portion of the fruits array
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits); // ["Banana", "Mango"]
// Task 8: Use splice() to insert and remove elements in the months array
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
console.log("Months after insertion:", months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May"); // Remove "June" at index 4 and insert "May"
console.log("Months after replacement:", months); // ["Jan", "Feb", "March", "April", "May"]
