// 1. Creating an Array
let fruits = ["Apple", "Banana", "Mango"];

// 2. Display the complete array
console.log("Original Array:", fruits);

// 3. Accessing Array Elements using Index
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

// 4. Changing an Array Element
fruits[1] = "Orange";
console.log("After Changing:", fruits);

// 5. Finding Array Length
console.log("Array Length:", fruits.length);

// 6. Adding an Element using push()
fruits.push("Grapes");
console.log("After push():", fruits);

// 7. Removing the Last Element using pop()
fruits.pop();
console.log("After pop():", fruits);

// 8. Adding an Element at the Beginning using unshift()
fruits.unshift("Watermelon");
console.log("After unshift():", fruits);

// 9. Removing the First Element using shift()
fruits.shift();
console.log("After shift():", fruits);