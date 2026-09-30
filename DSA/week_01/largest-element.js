let numbers = [10, 50, 2, 67, 85];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {

        largest = numbers[i];

    }

}

console.log("Largest =", largest);