// Function Declaration
function calculateMarks(name, mark1, mark2, mark3) {

    // Parameters: name, mark1, mark2, mark3

    let total = mark1 + mark2 + mark3;

    // Return statement
    return total;
}

// Calling the function
// Arguments: "Madhu", 80, 85, 90

let result = calculateMarks("Madhu", 80, 85, 90);

console.log("Student Name:", "Madhu");
console.log("Total Marks:", result);